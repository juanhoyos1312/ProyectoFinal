import Swal from 'sweetalert2'
import { useState, useEffect } from "react"
import { registrarProductoEnBD } from "../services/agregarProductos"

export function Administrador() {
    const[nombre, setNombre] = useState("")
    const[foto, setFoto] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[cantidad, setCantidad] = useState("")
    const[peso, setPeso] = useState("")
    const[precio, setPrecio] = useState("")
    const[clasificacion, setClasificacion] = useState("")
    const[marca, setMarca] = useState("")
    const[presentacion, setPresentacion] = useState("")
    const[descuento, setDescuento] = useState("")
    const[fechaingreso, setFechaIngreso] = useState("")
    const[fechavencimiento, setFechaVencimiento] = useState("")
    const[proveedor, setProveedor] = useState("")

    function procesarFormulario(evento){
        evento.preventDefault()
        let datosProducto={
            "nombre": nombre,
            "cantidad": cantidad,
            "foto": foto,
            "descripcion": descripcion,
            "peso": peso,
            "precioUnitario": precio,
            "clasificacion":clasificacion,
            "marca":marca,
            "presentacion":presentacion,
            "aplicaDescuento":descuento,
            "fechaIngreso":fechaingreso,
            "fechaVencimiento":fechavencimiento,
            "proveedor":proveedor
        }
        console.log(datosProducto)
        registrarProductoEnBD(datosProducto)
        .then(function(respuesta){
            Swal.fire(
                'Exitoso',
                'Te ganaste un vape',
                'Fuma relajado'
              )
        }) 
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Mala fuma',
              })
        })
    }
    
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row">
                <div class="col-8">
                    <img src="https://firebasestorage.googleapis.com/v0/b/vapes-ecfe6.appspot.com/o/PhotoRoom_20230106_174732_874x405.webp?alt=media&token=defc21fe-32c5-45f5-a31c-59717771e93d" alt="foto" class="img-fluid" />
                </div>
                <div class="col-4 text-center">
                    <h2>Registro de los vapes</h2>
                    <form onSubmit={procesarFormulario}>
                        <div class="row">
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-type"/></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Nombre" 
                                    id="nombre"
                                    onChange={(evento)=>{
                                        setNombre(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-image" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Foto" 
                                    id="foto"
                                    onChange={(evento)=>{
                                        setFoto(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-body-text"/></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Clasificación" 
                                    id="clasificacion"
                                    onChange={(evento)=>{
                                        setClasificacion(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bookmarks-fill" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Marca" 
                                    id="marca"
                                    onChange={(evento)=>{
                                        setMarca(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-earmark-slides-fill" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Presentación" 
                                    id="presentacion"
                                    onChange={(evento)=>{
                                        setPresentacion(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-percent"/></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Descuento" 
                                    id="descuento"
                                    onChange={(evento)=>{
                                        setDescuento(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="FechaIn" 
                                    id="fechaingreso"
                                    onChange={(evento)=>{
                                        setFechaIngreso(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="FechaVen" 
                                    id="fechavencimiento"
                                    onChange={(evento)=>{
                                        setFechaVencimiento(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bag-fill"></i></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Proveedor" 
                                    id="proveedor"
                                    onChange={(evento)=>{
                                        setProveedor(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-0-circle" /></span>
                                    <input 
                                    type="number" 
                                    class="form-control" 
                                    placeholder="Cantidad" 
                                    id="cantidad"
                                    onChange={(evento)=>{
                                        setCantidad(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-0-circle"/></span>
                                    <input 
                                    type="number" 
                                    class="form-control" 
                                    placeholder="Peso" 
                                    id="peso"
                                    onChange={(evento)=>{
                                        setPeso(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-0-circle"/></span>
                                    <input 
                                    type="number" 
                                    class="form-control" 
                                    placeholder="Precio" 
                                    id="precio"
                                    onChange={(evento)=>{
                                        setPrecio(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div>
                            <button type="submit" class="btn btn-outline-success w-100">Success</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}