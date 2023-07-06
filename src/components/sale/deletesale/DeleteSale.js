import { useNavigate, useParams } from "react-router-dom"

import { Alert, Button } from "antd"
import CrudSaleClass from "../../services/crudsale/CrudSale"

const DeleteSale = () =>{

const params = useParams()
const navigate = useNavigate()

const crudsale = new CrudSaleClass()
crudsale.deleteSale(params.id).then(data => console.log(data))
.then(() => alert("Deletado com sucesso"))
.then(()=> navigate("/venda/listarvendas")).catch(erro => console.log(erro))
return(

    <p>teste teste</p>
)

}

export default DeleteSale