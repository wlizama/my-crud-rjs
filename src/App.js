import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header';
import Productos from './components/Producto';
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';

function App() {

	const [ productos, guardarProductos ] = useState([]);

	useEffect(() => {
		const consultarApi = async () => {
			const resultado = await axios.get('http://localhost:3001/productos')
			guardarProductos(resultado.data)
		}
		consultarApi()
	}, [])

	return (
		<Router>
			<Header />
			<main className="container mt-5">
				<Switch>
					<Route exact path="/productos" 
						render={ ()=> (
							<Productos productos={productos} />
						)}
					 />
					<Route exact path="/nuevo-producto" component={AgregarProducto} />
					<Route exact path="/productos/editar/:id" component={EditarProducto} />
				</Switch>
			</main>
			<p className="mt-4 p2 text-center">&copy; Todos los derechos reservados</p>
		</Router>
	);
}

export default App;
