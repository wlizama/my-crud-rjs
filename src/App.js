import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Productos from './components/Producto';
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';

function App() {
	return (
		<Router>
			<Header />
			<main className="container mt-5">
				<Switch>
					<Route exact path="/nuevo-producto" component={AgregarProducto} />
					<Route exact path="/productos" component={Productos} />
					<Route exact path="/productos/editar/:id" component={EditarProducto} />
				</Switch>
			</main>
			<p className="mt-4 p2 text-center">&copy; Todos los derechos reservados</p>
		</Router>
	);
}

export default App;
