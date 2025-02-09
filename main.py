from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client, Client
import config  # Importamos las credenciales desde config.py

# Inicializa FastAPI
app = FastAPI()

# Configurar CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes cambiar "*" por el dominio de tu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Conectar con Supabase
supabase: Client = create_client(config.SUPABASE_URL, config.SUPABASE_KEY)

# Modelo para validar datos de productos
class Producto(BaseModel):
    nombre: str
    descripcion: str
    precio: float
    stock: int

# Ruta para agregar un producto
@app.post("/productos")
async def agregar_producto(producto: Producto):
    try:
        response = supabase.table("productos").insert(producto.dict()).execute()

        if not response.data:
            raise HTTPException(status_code=400, detail="Error al insertar producto")

        return {"message": "Producto agregado correctamente", "data": response.data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interno: {str(e)}")

# Ruta para obtener todos los productos
@app.get("/productos")
async def obtener_productos():
    try:
        response = supabase.table("productos").select("*").execute()

        if not response.data:
            return {"message": "No hay productos disponibles", "data": []}

        return {"message": "Productos obtenidos correctamente", "data": response.data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error interno: {str(e)}")