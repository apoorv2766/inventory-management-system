from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.database import Base


class Customer(Base):

    __tablename__ = "customers"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    full_name = Column(
        String(255),
        nullable=False
    )

    email = Column(
        String(255),
        unique=True,
        nullable=False
    )

    phone = Column(
        String(20),
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    orders = relationship(
        "Order",
        back_populates="customer"
    )