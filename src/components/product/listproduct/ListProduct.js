import { useEffect, useState } from "react"
import { FcEditImage  } from 'react-icons/fc';
import {FcDeleteDatabase} from 'react-icons/fc'
import {  Button, Card, Space, Table } from 'antd';
import CrudProductClass from "../../services/CrudProductClass";
import { Link } from "react-router-dom";
//import Link from "antd/es/typography/Link";

//import CrudProduct from "../../services/crudproduct/CrudProduct";

 const ListProduct = () => {


  
     var [product, setProduct] = useState([{id: "",
    name: "",
    description: "",
    expirationdate: "",
    category:"",
    brand:"",
    price:""}]);
      


 //var crudProduct = new CrudProduct();
//const teste = crudProduct.getProduct()
//console.log(teste)


const crudproduct = new CrudProductClass
crudproduct.getAllProduct()

  useEffect(() => {crudproduct.getAllProduct().then(data => setProduct(data)).then(()=> console.log(product))}, [])

  
 console.log(product.id)
  

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
      title: 'Descrição',
      dataIndex: 'description',
      key: 'age',
    },
    {
      title: 'Validade',
      dataIndex: 'expirationdate',
      key: 'address',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'address',
    },
    {
      title: 'Marca',
      dataIndex: 'brand',
      key: 'address',
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'address',
    },
   
    
    {
      title: 'Atualizar ou Deletar',
      key: 'action',
      render: (product) => (
        <Space size="large">
              <Link to={`/produto/atualizarproduto/${product.id}`}><FcEditImage size="2rem"/></Link>
              <Link to={`/produto/deletarproduto/${product.id}`}><FcDeleteDatabase size="2rem"/></Link>
              
              
          
        </Space>
      ),
    },

    
    
   
  ];
  const data = product


 return(

<Card>
<Table columns={columns} dataSource={data} />
</Card>


)


}

export default ListProduct