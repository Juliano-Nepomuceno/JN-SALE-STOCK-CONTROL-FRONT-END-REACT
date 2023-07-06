import { useEffect, useState } from "react"
import { FcEditImage  } from 'react-icons/fc';
import {FcDeleteDatabase} from 'react-icons/fc'
import {  Button, Card, Space, Table } from 'antd';
import CrudProductClass from "../../services/CrudProductClass";
import { Link } from "react-router-dom";
import CrudClientClass from "../../services/crudclient/CrudClient";
//import Link from "antd/es/typography/Link";

//import CrudProduct from "../../services/crudproduct/CrudProduct";

 const ListClient = () => {


  
     var [client, setClient] = useState([{id: "",
    name: "",
    description: "",
    expirationdate: "",
    category:"",
    brand:"",
    price:""}]);
      


 //var crudProduct = new CrudProduct();
//const teste = crudProduct.getProduct()
//console.log(teste)


const crudclient = new CrudClientClass
//crudclient.getAllProduct()

  useEffect(() => {crudclient.getAllClient().then(data => setClient(data)).then(()=> console.log(client))}, [])

  

  

const columns = [
    {
      title: `ID`,
      dataIndex: 'id',
      key: 'address',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    
    },
    {
      title: 'cpf',
      dataIndex: 'cpf',
      key: 'age',
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Fone',
      dataIndex: 'phone',
      key: 'address',
    },
    
   
    
    {
      title: 'Atualizar ou Deletar',
      key: 'action',
      render: (client) => (
        <Space size="large">
              <Link to={`/cliente/atualizarcliente/${client.id}`}><FcEditImage size="2rem"/></Link>
              <Link to={`/cliente/deletarcliente/${client.id}`}><FcDeleteDatabase size="2rem"/></Link>
              
              
          
        </Space>
      ),
    },

    
    
   
  ];
  const data = client


 return(

<Card>
<Table columns={columns} dataSource={data} />
</Card>


)


}

export default ListClient