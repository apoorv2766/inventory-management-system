from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.db.dependencies import get_db

from app.schemas.order import (
    OrderCreate,
    OrderResponse
)

from app.services import order_service


router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)


@router.post(
    "",
    response_model=OrderResponse
)
def create_order(
    payload: OrderCreate,
    db: Session = Depends(get_db)
):

    return order_service.create_order(
        db,
        payload
    )


@router.get(
    "",
    response_model=list[OrderResponse]
)
def get_orders(
    db: Session = Depends(get_db)
):

    return order_service.get_orders(
        db
    )


@router.get(
    "/{order_id}",
    response_model=OrderResponse
)
def get_order(
    order_id: int,
    db: Session = Depends(get_db)
):

    return order_service.get_order_by_id(
        db,
        order_id
    )


@router.delete(
    "/{order_id}"
)
def delete_order(
    order_id: int,
    db: Session = Depends(get_db)
):

    return order_service.delete_order(
        db,
        order_id
    )