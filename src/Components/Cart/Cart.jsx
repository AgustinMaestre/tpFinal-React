import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {carrito, clear, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return(
            <>
                 <h2> Carrito vacío, dirigete a la página de inicio para comprar</h2>
                <Link to="/" > Ver Productos </Link>
            </>
        )
    }

  return (
    <div>
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
        <h4> Total: $ {total} </h4>
        <h4> Cantidad total: {cantidadTotal} </h4>
        <button onClick={() => clear()}> Vaciar Carrito </button>
        <Link to="/checkout"> Finalizar Compra </Link>
    </div>
  )
}

export default Cart