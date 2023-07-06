
import { useEffect, useState } from "react"
import { FcEditImage  } from 'react-icons/fc';
import {FcDeleteDatabase} from 'react-icons/fc'
import {  Button, Card, Space, Table } from 'antd';
import CrudProductClass from "../../services/CrudProductClass";
import { Link } from "react-router-dom";
import CrudSellerClass from "../../services/crudseller/CrudSellerClass";

const ListSeller = () =>{

    var [seller, setSeller] = useState([{id: "",
    name: "",
    cpf: "",
    address: "",
    phone:"",
    wage:"",
    admissiondatee:"",
    username:""
}]);


const crudseller = new CrudSellerClass
useEffect(() =>
{crudseller.getAllSeller().then(data => setSeller(data)).then(()=> console.log(seller))}, [])

console.log(seller)

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
    title: 'Salario',
    dataIndex: 'wage',
    key: 'address',
  },
  {
    title: 'Data de admição',
    dataIndex: 'admissiondate',
    key: 'address',
  },
  {
    title: 'username',
    dataIndex: 'username',
    key: 'address',
  },
 
  
  {
    title: 'Atualizar ou Deletar',
    key: 'action',
    render: (seller) => (
      <Space size="large">
            <Link to={`/vendedor/atualizarvendedor/${seller.id}`}><FcEditImage size="2rem"/></Link>
            <Link to={`/vendedor/deletarvendedor/${seller.id}`}><FcDeleteDatabase size="2rem"/></Link>
            
            
        
      </Space>
    ),
  },]

  const data = seller


    return(
    
    
      <Card>
      <Table columns={columns} dataSource={data} />
      </Card>
    
    )
    
    }
    
    export default ListSeller