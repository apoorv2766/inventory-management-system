from fastapi import HTTPException

from sqlalchemy.orm import Session
from sqlalchemy.orm import joinedload

from app.models.customer import Customer
from app.models.product import Product
from app.models.order import Order
from app.models.order_item import OrderItem

from app.schemas.order import OrderCreate
from sqlalchemy.exc import SQLAlchemyError


def create_order(
    db: Session,
    payload: OrderCreate
):

    if not payload.items:

        raise HTTPException(
            status_code=400,
            detail="Order must contain at least one item"
        )

    customer = db.query(
        Customer
    ).filter(
        Customer.id == payload.customer_id
    ).first()

    if not customer:

        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    try:

        order = Order(
            customer_id=payload.customer_id,
            total_amount=0
        )

        db.add(order)

        db.flush()

        total_amount = 0

        processed_products = set()

        for item in payload.items:

            if item.product_id in processed_products:

                raise HTTPException(
                    status_code=400,
                    detail=f"Duplicate product {item.product_id} detected"
                )

            processed_products.add(
                item.product_id
            )

            product = db.query(
                Product
            ).filter(
                Product.id == item.product_id
            ).first()

            if not product:

                raise HTTPException(
                    status_code=404,
                    detail=f"Product {item.product_id} not found"
                )

            if product.quantity <= 0:

                raise HTTPException(
                    status_code=400,
                    detail=f"{product.name} is out of stock"
                )

            if item.quantity > product.quantity:

                raise HTTPException(
                    status_code=400,
                    detail=f"Insufficient stock for {product.name}"
                )

            subtotal = product.price * item.quantity

            total_amount += subtotal

            order_item = OrderItem(
                order_id=order.id,
                product_id=product.id,
                quantity=item.quantity,
                unit_price=product.price,
                subtotal=subtotal
            )

            db.add(order_item)

            product.quantity -= item.quantity

        order.total_amount = total_amount

        db.commit()

        db.refresh(order)

        return db.query(
            Order
        ).options(
            joinedload(
                Order.order_items
            )
        ).filter(
            Order.id == order.id
        ).first()

    except SQLAlchemyError: 

        db.rollback()

        raise


def get_orders(
    db: Session
):

    return db.query(
        Order
    ).options(
        joinedload(
            Order.order_items
        )
    ).all()


def get_order_by_id(
    db: Session,
    order_id: int
):

    order = db.query(
        Order
    ).options(
        joinedload(
            Order.order_items
        )
    ).filter(
        Order.id == order_id
    ).first()

    if not order:

        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    return order


def delete_order(
    db: Session,
    order_id: int
):

    order = db.query(
        Order
    ).options(
        joinedload(
            Order.order_items
        )
    ).filter(
        Order.id == order_id
    ).first()

    if not order:

        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    try:

        for item in order.order_items:

            product = db.query(
                Product
            ).filter(
                Product.id == item.product_id
            ).first()

            if product:

                product.quantity += item.quantity

        db.delete(order)

        db.commit()

        return {
            "message": "Order deleted successfully"
        }

    except Exception:

        db.rollback()

        raise