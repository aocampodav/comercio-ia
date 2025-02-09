import axios from "axios";

const API_URL = "/api/productos"; // URL del backend

// Obtener productos
export const getProductos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Agregar un producto
export const addProducto = async (producto) => {
  const response = await axios.post(API_URL, producto);
  return response.data;
};