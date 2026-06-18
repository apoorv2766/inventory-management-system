from pydantic import BaseModel
from pydantic import Field

from decimal import Decimal

from datetime import datetime


class OrderItemCreate(BaseModel):

    product_id: int

    quantity: int = Field(
        gt=0
    )


class OrderCreate(BaseModel):

    customer_id: int

    items: list[OrderItemCreate]


class OrderItemResponse(BaseModel):

    product_id: int

    quantity: int

    unit_price: Decimal

    subtotal: Decimal

    class Config:

        from_attributes = True


class OrderResponse(BaseModel):

    id: int

    customer_id: int

    total_amount: Decimal

    created_at: datetime

    order_items: list[OrderItemResponse]

    class Config:

        from_attributes = True