export async function registrarProductoEnBD(datosEnvio){
    //Esta es la direccion del back
    const URL="http://localhost:8080/tienda/api/"
    //Configurar la peticion que vamos a enviar al back
    const PETICION={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(datosEnvio)
    }
    //Configurar el envio de la peticion
    let respuesta = await fetch(URL, PETICION)
    let resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}