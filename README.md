# Inventory & Order Management System

## Overview

A production-ready full-stack Inventory & Order Management System built to manage:

- Products
- Customers
- Orders
- Inventory Tracking

The application is built using React, FastAPI, PostgreSQL, Docker, and Docker Compose.

The system implements business rules such as:

- Unique Product SKU validation
- Unique Customer Email validation
- Inventory stock validation
- Automatic stock reduction after order creation
- Automatic order amount calculation
- Proper error handling and input validation

---

# Live Application

## Frontend (Vercel)

https://inventory-management-system-eta-seven.vercel.app

## Backend API (Render)

https://inventory-management-system-vbwk.onrender.com

## Swagger Documentation

https://inventory-management-system-vbwk.onrender.com/docs

## Docker Hub

https://hub.docker.com/r/apoorv54/inventory-management-backend

## GitHub Repository

https://github.com/apoorv2766/inventory-management-system

---

# Features

## Dashboard

- Total Products
- Total Customers
- Total Orders
- Low Stock Products

## Product Management

- Add Product
- View Products
- Update Product
- Delete Product

## Customer Management

- Add Customer
- View Customers
- Delete Customer

## Order Management

- Create Order
- View Orders
- View Order Details
- Delete Order

---

# Tech Stack

## Frontend

- React
- React Router DOM
- Material UI
- Axios

## Backend

- Python
- FastAPI
- SQLAlchemy
- Alembic

## Database

- PostgreSQL

## Containerization

- Docker
- Docker Compose

## Deployment

- Render
- Vercel
- Docker Hub

---

# Project Structure

inventory-management-system/

```text
backend/
│
├── alembic/
├── app/
│   ├── api/
│   ├── core/
│   ├── db/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── utils/
│
├── Dockerfile
├── requirements.txt
└── alembic.ini


frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── routes/
│
├── Dockerfile
└── package.json


docker-compose.yml

README.md

.gitignore
```

---

# API Endpoints

## Products

```text
POST   /products

GET    /products

GET    /products/{id}

PUT    /products/{id}

DELETE /products/{id}
```

## Customers

```text
POST   /customers

GET    /customers

GET    /customers/{id}

DELETE /customers/{id}
```

## Orders

```text
POST   /orders

GET    /orders

GET    /orders/{id}

DELETE /orders/{id}
```

## Dashboard

```text
GET /dashboard
```

## Health Check

```text
GET /health/db
```

---

# Business Rules Implemented

## Product Rules

- Product SKU must be unique
- Product quantity cannot be negative

## Customer Rules

- Customer email must be unique

## Order Rules

- Orders cannot be placed if stock is insufficient
- Product stock is automatically reduced
- Order total amount is automatically calculated
- Duplicate products are not allowed in a single order

## Validation

- Proper request validation
- Proper HTTP status codes
- Proper error messages

---

# Environment Variables

## Backend (.env)

```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/inventory_db
```

## Backend (.env.docker)

```env
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/inventory_db
```

## Frontend (.env.local)

```env
VITE_API_URL=http://localhost:8000
```

---

# Run Locally

## Clone Repository

```bash
git clone https://github.com/apoorv2766/inventory-management-system.git

cd inventory-management-system
```

## Start Application

```bash
docker compose up --build
```

## Frontend

```text
http://localhost:5173
```

## Backend

```text
http://localhost:8000
```

## Swagger

```text
http://localhost:8000/docs
```

---

# Docker

## Start Containers

```bash
docker compose up --build
```

## Stop Containers

```bash
docker compose down
```

## Remove Volumes

```bash
docker compose down -v
```

---

# Deployment

## Frontend

Hosted on Vercel

## Backend

Hosted on Render

## Database

Hosted on Render PostgreSQL

## Container Image

Hosted on Docker Hub

---

# Assessment Deliverables

## GitHub Repository

https://github.com/apoorv2766/inventory-management-system

## Backend API

https://inventory-management-system-vbwk.onrender.com

## Frontend Application

https://inventory-management-system-eta-seven.vercel.app

## Docker Hub Image

https://hub.docker.com/r/apoorv54/inventory-management-backend

---

# Author

Apoorv Gupta

Software Engineer

GitHub:

https://github.com/apoorv2766