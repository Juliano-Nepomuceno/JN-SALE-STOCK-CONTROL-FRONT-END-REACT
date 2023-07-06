import { useNavigate, useParams } from "react-router-dom"
import CrudProductClass from "../../services/CrudProductClass"
import { Alert, Button } from "antd"
import CrudClientClass from "../../services/crudclient/CrudClient"

const DeleteClient = () =>{

const params = useParams()
const navigate = useNavigate()

const crudclient = new CrudClientClass()
crudclient.deleteClient(params.id).then(data => console.log(data))
.then(() => alert("Deletado com sucesso"))
.then(()=> navigate("/cliente/listarcliente")).catch(erro => console.log(erro))
return(

    <p>teste teste</p>
)

}

export default DeleteClient