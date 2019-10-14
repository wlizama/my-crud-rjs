import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/productos" className="navbar-brand">
                    My React CRUD
                </Link>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/productos" className="nav-link">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/productos/nuevo" className="nav-link">Nuevo producto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
