from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import ForeignKey
from sqlalchemy import Numeric
from sqlalchemy import DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.database import Base


class Order(Base):

    __tablename__ = "orders"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        nullable=False
    )

    total_amount = Column(
        Numeric(10, 2),
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    customer = relationship(
        "Customer",
        back_populates="orders"
    )

    order_items = relationship(
        "OrderItem",
        back_populates="order",
        cascade="all, delete-orphan",
        lazy="joined"
    )
