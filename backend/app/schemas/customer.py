from pydantic import BaseModel
from pydantic import EmailStr
from pydantic import Field
from datetime import datetime


class CustomerBase(BaseModel):

    full_name: str = Field(
        min_length=2,
        max_length=255
    )

    email: EmailStr

    phone: str = Field(
        min_length=10,
        max_length=20
    )


class CustomerCreate(CustomerBase):

    pass


class CustomerResponse(CustomerBase):

    id: int

    created_at: datetime

    class Config:

        from_attributes = True