import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe'
import { Servicios } from '../Servicios/Servicios'
import { Footer } from '../Footer/Footer'

export function Home() {
    return(
        <>
            <section>
                <div class="banner">
                    <h1>Bienvenido a la fumeta</h1>
                </div>
            </section>
            <AcercaDe></AcercaDe>
            <br></br>
            <Servicios></Servicios>
            <Footer></Footer>
        </>
    )
}