import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartItem = ({item, cantidad}) => {
    const {deleteProd} = useContext(CarritoContext)

  return (
    <div>
        <h3> {item.nombre} </h3>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: $ {item.precio} </p>
        <button onClick={() => deleteProd(item.id)}> Quitar Producto </button>
        <hr />
    </div>
  )
}

export default CartItem