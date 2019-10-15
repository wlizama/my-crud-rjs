import React, { useState } from 'react'
import Error from './Error'

import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'

function AgregarProducto({ history, guardarRecargarProductos }) {

    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState('')
    const [descripcion, guardarDescripcion] = useState('')
    const [categoria, guardarCategoria] = useState('')
    const [error, guardarError] = useState(false)

    const leerRBValue = e => {
        guardarCategoria(e.target.value)
    }

    const agregarProducto = async  e => {
        e.preventDefault()

        if(nombre === '' || precio === '' || descripcion === '' || categoria === '') {
            guardarError(true)
            return
        }

        guardarError(false)

        try {
            const result = await axios.post('http://localhost:3001/productos', {
                nombre,
                precio,
                categoria
            })

            // console.log(result)
            if(result.status === 201) {
                Swal.fire(
                    'Producto Creado',
                    'El producto se creo correctamente',
                    'success'
                )
            }
        }
        catch(err) {
            // console.error(err)
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Sucedió un error!',
            })
        }

        guardarRecargarProductos(true)
        history.push("/productos")
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Producto</h1>
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <form className="mt-5" onSubmit={agregarProducto}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Ingresar nombre" onChange={e => guardarNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input type="number" className="form-control" name="precio"placeholder="Ingresar precio" onChange={e => guardarPrecio(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Descripcion</label>
                    <textarea type="text" className="form-control" name="descripcion" placeholder="Ingresar descripción" onChange={e => guardarDescripcion(e.target.value)} ></textarea>
                </div>
                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="repuestos" onChange={leerRBValue} />
                        <label className="form-check-label">Repuestos</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria"value="farmacia" onChange={leerRBValue} />
                        <label className="form-check-label">Farmacia</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria"value="comida" onChange={leerRBValue} />
                        <label className="form-check-label">Comida</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria"value="computo" onChange={leerRBValue} />
                        <label className="form-check-label">Computo</label>
                    </div>
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
    )
}

export default withRouter(AgregarProducto)
