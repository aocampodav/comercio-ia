function ProductoCard({ producto }) {
    return (
      <div className="card">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
      </div>
    );
  }
  
  export default ProductoCard;