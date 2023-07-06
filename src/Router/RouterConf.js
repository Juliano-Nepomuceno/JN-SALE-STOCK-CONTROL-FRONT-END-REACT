
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import MenuProduto from "../components/Produto/MenuProduto"
//import ListProduto from "../components/Produto/ListarProduto/ListProduto"
import Protectioroute from "./ProtectionRoute"
import AuthUserLogin from "../components/Login/AuthUserLogin"
import Login from "../components/Login/Login"
import Home from "../components/Home/Home"
import Dashboard from "../components/product/dashboard/Dashboard"
import ListProduct from "../components/product/listproduct/ListProduct"
import ListByID from "../components/product/listByID/ListByID"
import CreateProduct from "../components/product/createproduct/CreateProduct"
import UpdateProduct from "../components/product/updateproduct/UpdateProduct"
import DeleteProduct from "../components/product/deleteproduct/DeleteProduct"
import RouterSeller from "../components/seller/RouterSeller"
import ListSeller from "../components/seller/listseller/ListSeller"
import CreateSeller from "../components/seller/createseller/CreateSeller"
import UpdateSeller from "../components/seller/updateseller/UpdateSeller"
import DeleteSeller from "../components/seller/deleteseller/Seleteseller"
import ListClient from "../components/client/listclient/ListClient"
import CreateClient from "../components/client/createclient/CreateClient"
import UpdateClient from "../components/client/updateclient/UpdateClient"
import DeleteClient from "../components/client/deleteclient/DeleteClient"
import ListSale from "../components/sale/listsale/ListSale"
import CreateSale from "../components/sale/createsale/CreateSale"
import Invoice from "../components/sale/invoice/Invoice"
//import SellerRank from "../components/rank/SellerRank"
import Rank from "../components/rank/Rank"
import RankResult from "../components/rank/RankResult"



function RouterConf(){

return(

<BrowserRouter>
    
    <Routes>
  <Route  path='/' element={<Login/>} />
  
 
  <Route path="authuserlogin" element={<AuthUserLogin/>}/>
  
  <Route path="home" element={<Protectioroute><Home/></Protectioroute>}/>
  
  <Route  path='produto' element={<Protectioroute><Home/></Protectioroute>}>
  
  <Route path="listarproduto"  element={<ListProduct/>}></Route>
  
  <Route path="listarproduto/:id"  element={<ListByID/>}></Route>
  <Route path="criarproduto"  element={<CreateProduct/>}></Route>
  <Route path="atualizarproduto/:id"  element={<UpdateProduct/>}></Route>
  <Route path="deletarproduto/:id"  element={<DeleteProduct/>}></Route>
  </Route>
  <Route  path='vendedor' element={<Protectioroute><Home/></Protectioroute>}>
  
  <Route path="/vendedor/listarvendedor"  element={<ListSeller/>}></Route>
  <Route path="/vendedor/criarvendedor"  element={<CreateSeller/>}></Route>
  <Route path="/vendedor/atualizarvendedor/:id"  element={<UpdateSeller/>}></Route>
  <Route path="/vendedor/deletarvendedor/:id"  element={<DeleteSeller/>}></Route>
  </Route>
  
  <Route  path='cliente' element={<Protectioroute><Home/></Protectioroute>}>

  <Route path="/cliente/listarcliente"  element={<ListClient/>}></Route>
  <Route path="/cliente/criarcliente"  element={<CreateClient/>}></Route>
  <Route path="/cliente/atualizarcliente/:id"  element={<UpdateClient/>}></Route>
  <Route path="/cliente/deletarcliente/:id"  element={<DeleteClient/>}></Route>
</Route>

<Route  path='venda' element={<Protectioroute><Home/></Protectioroute>}>

  <Route path="/venda/listarvendas/"  element={<ListSale/>}></Route>
  <Route path="/venda/criarvendas/"  element={<CreateSale/>}></Route>
  <Route path="/venda/nota/:id"  element={<Invoice/>}></Route>
  <Route path="/venda/deletarvenda/:id"  element={<DeleteClient/>}></Route>
</Route>  

<Route  path='rank' element={<Protectioroute><Home/></Protectioroute>}>

  <Route path="/rank"  element={<Rank/>}/>
  <Route path="/rankresult"  element={<RankResult/>}></Route>
 
</Route>

</Routes>

    
    </BrowserRouter>

)

}

export default RouterConf