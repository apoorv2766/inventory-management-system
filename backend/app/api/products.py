from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.dependencies import get_db
from app.schemas.product import (
    ProductCreate,
    ProductResponse,
    ProductUpdate
)
from app.services import product_service


router = APIRouter(
    prefix="/products",
    tags=["Products"]
)


@router.post(
    "",
    response_model=ProductResponse
)
def create_product(
    payload: ProductCreate,
    db: Session = Depends(get_db)
):

    return product_service.create_product(
        db,
        payload
    )


@router.get(
    "",
    response_model=list[ProductResponse]
)
def get_products(
    db: Session = Depends(get_db)
):

    return product_service.get_products(
        db
    )


@router.get(
    "/{product_id}",
    response_model=ProductResponse
)
def get_product(
    product_id: int,
    db: Session = Depends(get_db)
):

    return product_service.get_product_by_id(
        db,
        product_id
    )


@router.put(
    "/{product_id}",
    response_model=ProductResponse
)
def update_product(
    product_id: int,
    payload: ProductUpdate,
    db: Session = Depends(get_db)
):

    return product_service.update_product(
        db,
        product_id,
        payload
    )


@router.delete(
    "/{product_id}"
)
def delete_product(
    product_id: int,
    db: Session = Depends(get_db)
):

    return product_service.delete_product(
        db,
        product_id
    )