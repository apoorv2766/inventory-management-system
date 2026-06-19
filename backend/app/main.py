from fastapi import FastAPI
from sqlalchemy import text
from app.db.database import engine
from app.api.products import router as product_router
from app.api.api.customers import router as customer_router
from app.api.api.dashboard import router as dashboard_router
from fastapi.exceptions import RequestValidationError
from app.middleware.cors import configure_cors
from app.utils.exceptions import validation_exception_handler
from app.api.api.orders import router as order_router
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI(
    title="Inventory Management API",
    version="1.0.0"
)

configure_cors(app)

app.add_exception_handler(
    RequestValidationError,
    validation_exception_handler
)



@app.get("/")
def home():
    return {"message": "Inventory API Running"}

app.include_router(product_router)
app.include_router(customer_router)
app.include_router(dashboard_router)
app.include_router(order_router)


@app.get("/health/db")
def database_health():
    return {
        "database": "connected"
    }
