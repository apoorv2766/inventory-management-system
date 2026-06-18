from pydantic import BaseModel


class LowStockProduct(BaseModel):

    id: int

    name: str

    quantity: int

    class Config:

        from_attributes = True


class DashboardResponse(BaseModel):

    total_products: int

    total_customers: int

    total_orders: int

    low_stock_products: list