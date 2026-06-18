from pydantic import BaseModel
from pydantic import Field
from decimal import Decimal
from datetime import datetime
from typing import Optional


class ProductBase(BaseModel):

    name: str = Field(
        min_length=2,
        max_length=255
    )

    sku: str = Field(
        min_length=2,
        max_length=100
    )

    price: Decimal = Field(
        gt=0
    )

    quantity: int = Field(
        ge=0
    )


class ProductCreate(ProductBase):

    pass


class ProductUpdate(BaseModel):

    name: Optional[str] = Field(
        default=None,
        min_length=2,
        max_length=255
    )

    sku: Optional[str] = Field(
        default=None,
        min_length=2,
        max_length=100
    )

    price: Optional[Decimal] = Field(
        default=None,
        gt=0
    )

    quantity: Optional[int] = Field(
        default=None,
        ge=0
    )


class ProductResponse(ProductBase):

    id: int

    created_at: datetime

    class Config:

        from_attributes = True