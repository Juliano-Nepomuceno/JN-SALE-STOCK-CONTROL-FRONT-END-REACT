import { useNavigate, useParams } from "react-router-dom"
import CrudProductClass from "../../services/CrudProductClass"
import { Alert, Button } from "antd"

const DeleteProduct = () =>{

const params = useParams()
const navigate = useNavigate()

const crudproduct = new CrudProductClass()
crudproduct.deleteProduct(params.id).then(data => console.log(data))
.then(() => alert("Deletado com sucesso"))
.then(()=> navigate("/produto/listarproduto")).catch(erro => console.log(erro))
return(

    <p>teste teste</p>
)

}

export default DeleteProduct