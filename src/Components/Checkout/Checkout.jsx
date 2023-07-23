import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css"

const Checkout = () => {
    const {carrito, clear, cantidadTotal, total} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfir, setEmailConfir] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");

    const manejadorForm = (e) => {
        e.preventDefault()

        if (!nombre || !apellido || !telefono || !email || !emailConfir) {
            setError("Por favor, complete todos los campos para continuar")
            return;
        }

        if (email !== emailConfir) {
            setError("El email no coincide, controle nuevamente los campos");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            cantidad: total,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                clear();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva prontus");
            })
    }

    return (
        <div className="form">
            <h2> Checkout </h2>
            <form onSubmit={manejadorForm} className="formulario">
                {carrito.map(producto => (
                    <div key={producto.id}>
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p> Precio $ {producto.item.precio} </p>
                        <p> Total: {producto.item.total} </p>
                        <hr />
                    </div>
                ))}
                <hr />
                <div className="form-group">
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="telefono"> Teléfono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email"> Email Confirmación </label>
                    <input type="email" value={emailConfir} onChange={(e) => setEmailConfir(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }} > {error} </p>
                }

                <button type="submit" class="btn btn-primary"> Finalizar Compra </button>

            </form>
            {
                orderId && (
                    <strong className="ordenId"> ¡Gracias por tu compra! Tu número de comprar es: {orderId} </strong>
                )
            }
        </div>
    )
}

export default Checkout