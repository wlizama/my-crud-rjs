import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'

function ProductoLista({producto}) {

    const eliminaProducto = (id) => {
        Swal.fire({
            title: `Desea eliminar producto ID: ${id}?`,
            text: "Esta acción no se puede revertir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then(async (result) => {
            if (result.value) {

                const rdel = await axios.delete(`http://localhost:3001/productos/${id}`)
                if (rdel.status === 200) {
                    Swal.fire(
                        'Eliminado!',
                        'Producto eliminado con exito.',
                        'success'
                    )
                }

            }
        })
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

export default withRouter(ProductoLista)
