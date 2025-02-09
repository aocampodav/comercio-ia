import { useState, useEffect } from "react";
import { getProductos, addProducto } from "../services/api";
import ProductoCard from "../components/ProductoCard";
import ProductoForm from "../components/ProductoForm";

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const data = await getProductos();
    setProductos(data);
  };

  const handleAgregarProducto = async (producto) => {
    await addProducto(producto);
    cargarProductos(); // Recargar la lista
  };

  return (
    <div className="container">
      <h1>Lista de Productos</h1>
      <ProductoForm onAgregar={handleAgregarProducto} />
      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Home;