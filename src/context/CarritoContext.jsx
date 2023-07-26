import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const addProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}])
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const carritoActualizado = carrito.map (prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => (item.precio * cantidad))
        }
    }

    const deleteProd = (id) => {
        const prodEliminado = carrito.find( prod => prod.item.id === id)
        const cartActualizado = carrito.filter( prod => prod.item.id !== id)
        setCarrito(cartActualizado)
        setCantidadTotal( prev => prev - prodEliminado.cantidad)
        setTotal( prev => prev - (prodEliminado.item.precio * prodEliminado.cantidad))
    }

    const clear = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0)
    }

    return (
        <CarritoContext.Provider value={{carrito, cantidadTotal, total, addProducto, deleteProd, clear}}>

            {children}

        </CarritoContext.Provider>
    )
}