import { Link } from "react-router-dom"
import './Tienda.css'
import '../AmpliarInfo/AmpliarInfo'
import { AmpliarInfo } from "../AmpliarInfo/AmpliarInfo"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { consultarProductos } from "../services/buscarProductos"

export function Tienda() {

    const[productostienda, setProductos] = useState("")
    const[estadocarga, setEstadoCarga] = useState(true)

    function cambiarFoto(evento) {
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }
    function cambiarFoto2(evento) {
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }
    let navegador = useNavigate()
    function pasarInformacion(producto){
        navegador('/compras', {
            state: {producto}
        })
    }

    useEffect(function(){
        consultarProductos()
        .then(function(respuesta){
            setEstadoCarga(false)
            setProductos(respuesta)
        })
    },[])

    if(estadocarga == true){
        return(
            <>
            <h1>ESTAMOS CARGANDO...</h1>
            </>
        )
    }else{
        return (
            <>
                <div class="row row-cols-1 row-cols-md-4 g-3 my-5 p-5">
                    {
                        productostienda.map(function (producto) {
                            return (
                                <div class="col zoom" onClick={function(){pasarInformacion(producto)}}>
                                    <div class="card shadow h-100 border-5 border-primary rounded">
                                        <img 
                                        src={producto.foto} 
                                        alt="foto" 
                                        class="img-fluid sombra" 
                                        onMouseOver={cambiarFoto} 
                                        onMouseLeave={cambiarFoto2} 
                                        />
                                        <h2 class="text-center fw-bold text-black">{producto.nombre}</h2>
                                        <h4 class="text-justify p-2 text-black">{producto.descripcion}</h4>
                                        <h4 class="text-success text-center">{producto.precio}$ COP</h4>
                                        <Link to={producto.link} class="text-center btn btn-primary m-3 rounded-5" target="_blank">Comprar</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}