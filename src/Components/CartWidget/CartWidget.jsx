import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCart = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
    const {cantidadTotal} = useContext(CarritoContext)

  return (
    <div>
      <Link to="/cart">
        <img className='imgCart' src={imgCart} alt="imagen de carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget