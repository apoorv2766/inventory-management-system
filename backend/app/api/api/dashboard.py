from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.dependencies import get_db
from app.schemas.dashboard import DashboardResponse
from app.services import dashboard_service


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get(
    "",
    response_model=DashboardResponse
)
def get_dashboard(
    db: Session = Depends(get_db)
):

    return dashboard_service.get_dashboard_data(
        db
    )