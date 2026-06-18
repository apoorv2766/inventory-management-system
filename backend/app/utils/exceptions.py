
from fastapi import Request

from fastapi.responses import JSONResponse

from fastapi.exceptions import RequestValidationError
from fastapi.encoders import jsonable_encoder


async def validation_exception_handler(
    request: Request,
    exc: RequestValidationError
):

    return JSONResponse(
        status_code=422,
        content=jsonable_encoder({
            "message": "Validation Error",
            "errors": exc.errors()
        })
    )