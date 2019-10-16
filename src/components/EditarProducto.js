import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'


function EditarProducto({id}) {

    const [ producto, setProducto ] = useState({})
    const nombre = useRef('')
    const precio = useRef(0)
    const descripcion = useRef('')

    const [categoria, setCategoria] = useState('')
    const [error, setError] = useState(false)

    const leerRBValue = e => {
        setCategoria(e.target.value)
    }

    useEffect(() => {
		
        const consultarApi = async () => {
            const resultado = await axios.get(`http://localhost:3001/productos`, { params: {id} })
            setProducto(resultado.data[0])
        }
        consultarApi()
    }, [])
    
    const saveProducto = e => {
        e.preventDefault()

        console.log(producto)
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar Producto {id}</h1>
            {/*{error ? <Error mensaje="Todos los campos son obligatorios" /> : null}*/}
            <form className="mt-5" onSubmit={saveProducto}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Ingresar nombre" ref={nombre} defaultValue={producto.nombre} />
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input type="number" className="form-control" name="precio"placeholder="Ingresar precio" ref={precio} defaultValue={producto.precio} />
                </div>
                <div className="form-group">
                    <label>Descripcion</label>
                    <textarea type="text" className="form-control" name="descripcion" placeholder="Ingresar descripción" ref={descripcion} defaultValue={producto.descripcion} ></textarea>
                </div>
                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="repuestos" onChange={leerRBValue} defaultChecked={(producto.categoria === "repuestos")} />
                        <label className="form-check-label">Repuestos</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="farmacia" onChange={leerRBValue} defaultChecked={(producto.categoria === "farmacia")} />
                        <label className="form-check-label">Farmacia</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="comida" onChange={leerRBValue} defaultChecked={(producto.categoria === "comida")} />
                        <label className="form-check-label">Comida</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="computo" onChange={leerRBValue} defaultChecked={(producto.categoria === "computo")} />
                        <label className="form-check-label">Computo</label>
                    </div>
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Guardar Producto" />
            </form>
        </div>
    )
}

export default EditarProducto
