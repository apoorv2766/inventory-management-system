from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models.product import Product
from app.schemas.product import ProductCreate
from app.schemas.product import ProductUpdate


def create_product(
    db: Session,
    payload: ProductCreate
):

    existing_product = db.query(
        Product
    ).filter(
        Product.sku == payload.sku
    ).first()

    if existing_product:

        raise HTTPException(

            status_code=400,

            detail="SKU already exists"

        )

    product = Product(

        name=payload.name,

        sku=payload.sku,

        price=payload.price,

        quantity=payload.quantity

    )

    db.add(product)

    db.commit()

    db.refresh(product)

    return product


def get_products(
    db: Session
):

    return db.query(
        Product
    ).all()


def get_product_by_id(
    db: Session,
    product_id: int
):

    product = db.query(
        Product
    ).filter(

        Product.id == product_id

    ).first()

    if not product:

        raise HTTPException(

            status_code=404,

            detail="Product not found"

        )

    return product


def update_product(

    db: Session,

    product_id: int,

    payload: ProductUpdate

):

    product = get_product_by_id(

        db,

        product_id

    )

    update_data = payload.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():

        setattr(
            product,
            key,
            value
        )

    db.commit()

    db.refresh(product)

    return product


def delete_product(

    db: Session,

    product_id: int

):

    product = get_product_by_id(

        db,

        product_id

    )

    db.delete(product)

    db.commit()

    return {

        "message": "Product deleted"

    }
