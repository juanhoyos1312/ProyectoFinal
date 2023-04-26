import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import { Menu } from "../Menu/Menu"
import { Tienda } from "../Tienda/Tienda"
import { AmpliarInfo } from "../AmpliarInfo/AmpliarInfo"
import { QuienSoyYo } from "../QuienSoyYo/QuienSoyYo"
import { InformacionPersonal } from "../InformacionPersonal/InformacionPersonal"

export function Router(){
    return(
        <>
        <header>
            <Menu></Menu>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administrar" element={<Administrador />} />
            <Route path="/productos" element={<Tienda/>}/>
            <Route path="/compras" element={<AmpliarInfo/>}/>
            <Route path="/quiensoyyo" element={<QuienSoyYo/>}/>
            <Route path="/informacionpersonal" element={<InformacionPersonal/>}/>
        </Routes>
        </>
    )
}