import { useState } from "react";

function ProductoForm({ onAgregar }) {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: ""
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(producto);
    setProducto({ nombre: "", descripcion: "", precio: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" value={producto.nombre} onChange={handleChange} required />
      <input type="text" name="descripcion" placeholder="Descripción" value={producto.descripcion} onChange={handleChange} required />
      <input type="number" name="precio" placeholder="Precio" value={producto.precio} onChange={handleChange} required />
      <input type="number" name="stock" placeholder="Stock" value={producto.stock} onChange={handleChange} required />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductoForm;