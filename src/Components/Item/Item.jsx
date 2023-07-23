import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="card">
      <img src={img} alt={nombre} class="card-img-top" />
      <h5>Nombre: {nombre} </h5>
      <p>Precio: ${precio}</p>
      <p>ID: {id}</p>
      <p>Stock: {stock} </p>
      <Link to={`/item/${id}`} class="btn btn-primary" > Ver Detalles</Link>
    </div>
  )
}

export default Item
