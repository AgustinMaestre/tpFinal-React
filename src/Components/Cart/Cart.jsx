import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    const {carrito, clear, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return(
            <div className="cont">
                <h2> Carrito vacío, dirigete a la página de inicio para comprar</h2>
                <Link to="/" > Ver Productos </Link>
            </div>
        )
    }

  return (
    <div className="cart_prod">
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
        <h4> Total: $ {total} </h4>
        <h4> Cantidad total: {cantidadTotal} </h4>
        <button onClick={() => clear()} className="btn btn-danger"> Vaciar Carrito </button>
        <Link to="/checkout" className="btn btn-success"> Finalizar Compra </Link>
    </div>
  )
}

export default Cart