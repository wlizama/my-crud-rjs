import React from 'react'
import { Link } from 'react-router-dom'

function ProductoLista({producto}) {

    const eliminaProducto = (id) => {
        console.log(id)
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {producto.nombre}&nbsp;
                <span className="font-weight-bold">$ {producto.precio}</span>
            </p>
            <div>
                <Link to={`/productos/editar/${producto.id}`} className="btn btn-success mr-2">
                   Editar &raquo;
                </Link>
                <button type="button" className="btn btn-danger" onClick={()=>eliminaProducto(producto.id)}>
                    Eliminar &times;
                </button>
            </div>
        </li>
    )
}

export default ProductoLista
