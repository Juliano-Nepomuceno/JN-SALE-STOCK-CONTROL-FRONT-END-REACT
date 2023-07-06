import { useState } from "react"
import { Outlet } from "react-router-dom"


function Dashboard(){


    return(
    <div>
    <nav><p>Listar Produto</p><p>Criar Produto</p></nav>
    <Outlet></Outlet>
    </div>
    )

}

export default Dashboard 