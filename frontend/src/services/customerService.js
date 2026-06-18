import api from "../api/axios";

export const getCustomers = async () => {
  const response = await api.get("/customers");

  return response.data;
};

export const createCustomer = async (payload) => {
  const response = await api.post("/customers", payload);

  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await api.delete(`/customers/${id}`);

  return response.data;
};
