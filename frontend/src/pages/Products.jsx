import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import ProductForm from "../components/ProductForm";

import ProductList from "../components/ProductList";

import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../services/productService";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await getProducts();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = async (payload) => {
    await createProduct(payload);

    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);

    fetchProducts();
  };

  return (
    <>
      <Typography variant="h4" mb={4}>
        Products
      </Typography>

      <ProductForm onSubmit={handleCreate} />

      <ProductList products={products} onDelete={handleDelete} />
    </>
  );
};

export default Products;
