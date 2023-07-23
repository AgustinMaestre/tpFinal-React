import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, img, precio, stock }) => {
  const [addCantidad, setAddCantidad] = useState(0)

  const {addProducto} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAddCantidad(cantidad);

    const item = {id, nombre, precio}
    addProducto(item, cantidad)

  }

  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: $ {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Descripcion del producto</p>
      <img src={img} alt={nombre} />
      <hr />
      {
        addCantidad > 0 ? (<Link to="/cart"> Finalizar Compra </Link> ) : (<ItemCount inicial= {1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail