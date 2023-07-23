import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"}>
            <h1>ElectroTech</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navBarra" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={"/"}> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/categoria/1`}> Celulares </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/categoria/2`}> Computadoras </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/categoria/3`}> Consolas </NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>

    </header>
  )
}

export default NavBar