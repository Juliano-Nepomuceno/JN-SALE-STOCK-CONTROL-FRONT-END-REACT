import { useNavigate, useParams } from "react-router-dom"
import CrudProductClass from "../../services/CrudProductClass"
import { Alert, Button } from "antd"
import CrudSellerClass from "../../services/crudseller/CrudSellerClass"

const DeleteSeller = () =>{

const params = useParams()
const navigate = useNavigate()

const crudseller = new CrudSellerClass()
crudseller.deleteProduct(params.id).then(data => console.log(data))
.then(() => alert("Deletado com sucesso"))
.then(()=> navigate("/vendedor/listarvendedor")).catch(erro => console.log(erro))
return(

    <p>teste teste</p>
)

}

export default DeleteSeller