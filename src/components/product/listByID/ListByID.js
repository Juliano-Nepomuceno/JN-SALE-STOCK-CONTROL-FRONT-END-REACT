import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CrudProductClass from '../../services/CrudProductClass';

function ListByID(){

var idparams = useParams()
console.log(idparams)

var [product, setProduct] = useState([{id: "",
    name: "",
    description: "",
    expirationdate: "",
    category:"",
    brand:"",
    price:""}])
      
    
  //  useEffect(  () => 
    //fetch("http://localhost:3004/product/1").then(data => data.json()).then(data => setProduct(data)).then(()=> console.log(product)), [])
    const crudproduct = new CrudProductClass
    useEffect(() => {crudproduct.getByIdProduct(idparams.id).then(data => setProduct(data)).then(()=> console.log(product))}, [])


    const columns = [
        {
          title: 'ID',
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
        
            
      ];

      const data = [product]
      
      

      return(


        <Table columns={columns} dataSource={data} />
        
      
        
        )

    
}



export default ListByID