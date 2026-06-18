# Inventory & Order Management System

## Overview

A full-stack Inventory & Order Management System built for managing products, customers, orders, and inventory tracking.

The application is built using:

* React (Frontend)
* FastAPI (Backend)
* PostgreSQL (Database)
* Docker
* Docker Compose

The system enforces business rules such as:

* Unique Product SKU
* Unique Customer Email
* Inventory validation
* Automatic stock reduction
* Automatic order total calculation

---

## Features

### Dashboard

* Total Products
* Total Customers
* Total Orders
* Low Stock Products

### Product Management

* Add Product
* View Products
* Update Product
* Delete Product

### Customer Management

* Add Customer
* View Customers
* Delete Customer

### Order Management

* Create Order
* View Orders
* View Order Details
* Delete Order

---

## Tech Stack

### Frontend

* React
* Material UI
* React Router DOM
* Axios

### Backend

* Python
* FastAPI
* SQLAlchemy
* Alembic

### Database

* PostgreSQL

### Containerization

* Docker
* Docker Compose

---

## Project Structure

inventory-management-system/

backend/

frontend/

docker-compose.yml

README.md

.gitignore

---

## Environment Variables

### Backend (.env)

```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/inventory_db
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:8000
```

---

## Run Locally

Clone repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY>
```

Move into project:

```bash
cd inventory-management-system
```

Run application:

```bash
docker compose up --build
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:8000
```

Swagger:

```text
http://localhost:8000/docs
```

---

## API Endpoints

### Products

POST /products

GET /products

GET /products/{id}

PUT /products/{id}

DELETE /products/{id}

### Customers

POST /customers

GET /customers

GET /customers/{id}

DELETE /customers/{id}

### Orders

POST /orders

GET /orders

GET /orders/{id}

DELETE /orders/{id}

### Dashboard

GET /dashboard

---

## Deployment URLs

Frontend:

<ADD_VERCEL_URL>

Backend:

<ADD_RENDER_URL>

Docker Hub:

<ADD_DOCKER_HUB_URL>

GitHub Repository:

<ADD_GITHUB_URL>
