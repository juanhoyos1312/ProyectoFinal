import './Menu.css'
import { Link } from "react-router-dom"
export function Menu() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark menu fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><i class="bi bi-cloud" />Code vapes</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/administrar">Agregar Productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/productos">Productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/quiensoyyo">Que somos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/informacionpersonal">Acerca de mi</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}