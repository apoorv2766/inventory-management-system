from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Numeric
from sqlalchemy import DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.database import Base


class Product(Base):

    __tablename__ = "products"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(255),
        nullable=False
    )

    sku = Column(
        String(100),
        unique=True,
        nullable=False
    )

    price = Column(
        Numeric(10, 2),
        nullable=False
    )

    quantity = Column(
        Integer,
        nullable=False,
        default=0
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    order_items = relationship(
        "OrderItem",
        back_populates="product"
    )