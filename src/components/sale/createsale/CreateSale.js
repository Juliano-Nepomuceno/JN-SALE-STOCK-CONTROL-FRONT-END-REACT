
import { Alert, Button, Card, Form, Input, InputNumber, Select, Space, TreeSelect, Table } from 'antd';
import CrudProductClass from '../../services/CrudProductClass';
import { useEffect, useState } from 'react';
import CrudSaleClass from '../../services/crudsale/CrudSale';
import Invoice from '../../services/invoice/Invoice';
import { Col, Row } from 'antd';
//import CrudSellerClass from './services/crudseller/crudseller'
//import CrudClient from './services/crudclient/crudclient'
import CrudClientClass from "../../services/crudclient/CrudClient";
import CrudSellerClass from "../../services/crudseller/CrudSellerClass";
import { useNavigate } from 'react-router-dom';



function CreateSale(){

  const [sucess, setSucess] = useState(false)
  const [erro, setErro] = useState(false)
  const[nameproduct, setNameproduct] = useState()
  const [proudct, setProduct] = useState([])
  const [basketProduct, setBasketProduct] = useState([])
  const [total, setTotal] = useState([])
  const crudsale = new CrudSaleClass()
  const crudproduct = new CrudProductClass([])
  const crudclient = new CrudClientClass([])
  const crudseller = new CrudSellerClass([])
  const[price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const[priceproduct, setPriceproduct] = useState("")
  const [priceupdate, setPriceupdate] = useState("")
  const [productList, setProductList] = useState([])
  const [client, setClient] = useState( [{id: "",name: "",cpf: "",address: "",phone: ""}])
  const [seller, setSeller] = useState([{ id: "",name: "",cpf: "",address: "",phone: "",wage: "",admissiondate: "",username: ""}])
  const [sale, setSale] = useState( {
    date:"",
    seller:"",
    client:"",
    products:[],
   
    
      })

      const navigate = useNavigate()
  
  const hours = new Date()



  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      
    
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
      
    
    },
    {
      title: 'Preço com quantidade',
      dataIndex: 'priceUpdate',
      
    
    }
    
    
      ]

      

 


  useEffect(() =>
  {crudproduct.getAllProduct().then(data => setProduct(data));{crudclient.getAllClient().then(data => setClient(data))}; crudseller.getAllSeller().then(data => setSeller(data)); {crudclient.getAllClient().then(data => setClient(data))}}
  
  
  ,[])
 
  
  proudct.map(value =>  Object.assign(value,{label:value.name, value:value.name }))
  client.map(value => Object.assign(value,{label:value.name, value:value.name}))
 seller.map(value => Object.assign(value,{label:value.name, value:value.name}))  
  
   
 const priceProduct  = (value) => proudct.filter(product => product.name == value).map(product => (product.price))



 const changeProduct = (value) =>{
  
  setProductList({name:value, price:priceProduct(value)[0]})
  console.log(productList)
  

 

  }

  const addProduct = () =>{
sale.products.push({name:productList.name, price:productList.price, quantity:productList.quantity,priceUpdate:productList.priceUpdate})

setBasketProduct(value =>[...value, productList ])

var result = sale.products.map(data => data.priceUpdate).reduce((prev, elem)=>prev + elem)

setTotal(result)

console.log(result)

  }
  
  

  const changeQuantity = (value) =>{

productList.quantity= value
//var price = parseFloat(productList.price)
//var quantity =  parseFloat(productList.quantity)
var priceUpdate = (parseFloat(productList.price) * parseFloat(productList.quantity))
//var priceUpdate = (price.replace(",",".") * quantity.replace(",","."))
productList.priceUpdate = priceUpdate

console.log(productList)


  } 

  const changeSeller = (value) =>{
setSale(data =>{ return{ ...data, seller:value}})
console.log(sale)
  }

  const changeClient =(value) =>{
setSale(data =>{return {...data, client:value}})
console.log(sale)
  }
  
  const optionsProduct = proudct

  const optionsSeller = seller
  const optionsClient = client


  
 

  //const options = [{label:"Produto macarrao dois", value:"macarrao doisss"},{label:"biscoito tres", value:"macarrao tres"}];

const handleChange = (value) => {
  //console.log(`selected ${value}`);
  setPrice(value)
};
  



    const onFinish = () => {
        console.log('Success:', sale);
        sale.valuetotal = total
        sale.date = new Date
        crudsale.postSale(sale).then(data => {setSucess(true); console.log(data)}).catch(erro => {setErro(true); console.log(erro)})
        
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


      const changeTotal = (value) =>{

setTotal(value)
console.log(total)

      }

      const data = productList
    
   const testerender = "ola ola"
    
    return(


<Row >

<Form
    name="basic"
    size="large"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 1000,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    
    <Col span={8}>
      <Card bordered style={{ width: 500}}>
    Data
    <Form.Item
      
      label=""
      name="date"
      
      
    >
 <Input placeholder={new Date}  disabled /><br/><br/>
      
     
        <Form.Item >
        Selecione o produto
        <TreeSelect label="Produtos" name="product" title='Selecione Produtos'
        onChange={changeProduct}
            treeData={optionsProduct}
              
            
          /> <br/><br/>
        
        Selecione a Quantidade  <InputNumber name='quantidade'  onChange={changeQuantity} min={2} max={200} />

         
        <br/><br/>
  <Button onClick={addProduct}>
        Adicionar Produto
      </Button>
      </Form.Item>
      
     
</Form.Item>
</Card>
</Col>
</Form>

<Form>
<Col span={8}>
<Card bordered style={{ width: 500}}>

  
<Form.Item>


<Table columns={columns} dataSource={basketProduct}  />






  
 
          <Space 
    direction="vertical"
    size="middle"
    style={{
      display: 'flex',
    }}
  >Total{total}</Space>
  
          
        
    
    

           </Form.Item>
           </Card>
           </Col>
           </Form>
           
          
           
          <Form>

           <Col span={8}> 
        <Card bordered style={{ width: 400 }}>
        <Form.Item label="Vendedor" name="seller" >
          
          <TreeSelect onChange={changeSeller}
            treeData={optionsSeller}
          />
        </Form.Item>

        <Form.Item label="Cliente" name="client" >
          
          <TreeSelect onChange={changeClient}
            treeData={optionsClient}
          />
        </Form.Item>

    
    
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button onClick={onFinish} type="primary" htmlType="submit">
        Finalizar Venda
      </Button><br></br><br></br>
      Para Emitir nota acesse Listar vendas no menu
    </Form.Item>
    </Card>
    
    
    </Col>
    
    {sucess &&
     <Space
     direction="vertical"
     style={{
       width: '100%',
     }}
   >
     <Alert
       message="Venda efetuada com sucesso"
       type="success"
       showIcon
       action={
         <Button size="small" type="text">
           
         </Button>
         
       }
       closable
     />
    </Space>}
      
      {erro &&
          <Space
          direction="vertical"
          style={{
            width: '80%',
          }}>

<Alert
       message="Erro ao inserir"
       type="error"
       showIcon
       action={
         <Button size="small" type="text">
           
         </Button>
       }
       closable
     />

          </Space>
          
      

    }

   
    </Form>
    
   
    
    
</Row>
       

        
      

      

    )
    

    
    
  }

export default CreateSale