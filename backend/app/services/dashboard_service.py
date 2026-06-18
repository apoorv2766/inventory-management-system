from sqlalchemy.orm import Session
from app.models.customer import Customer
from app.models.order import Order
from app.models.product import Product


def get_dashboard_data(db: Session):
    low_stock_products = db.query(
        Product
    ).filter(
        Product.quantity <= 5
    ).all()

    return {
        "total_products": db.query(Product).count(),
        "total_customers": db.query(Customer).count(),
        "total_orders": db.query(Order).count(),
        "low_stock_products": low_stock_products,
    }
