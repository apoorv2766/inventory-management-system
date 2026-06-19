from fastapi.middleware.cors import CORSMiddleware


def configure_cors(app):

    app.add_middleware(

        CORSMiddleware,

        allow_origins=[

            "http://localhost:5173", "http://localhost:3000", "https://inventory-management-system-eta-seven.vercel.app"

        ],

        allow_origin_regex=r"https://inventory-management-system-.*\.vercel\.app",

        allow_credentials=True,

        allow_methods=["*"],

        allow_headers=["*"]

    )