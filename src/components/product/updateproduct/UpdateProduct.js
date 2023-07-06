import { useParams } from "react-router-dom"
import CrudProductClass from "../../services/CrudProductClass"
import { useEffect, useState } from "react"
import { Alert, Button, Card, Form, Input, Space } from "antd"

const UpdateProduct = () => {

const params = useParams()
const[product, setProduct] = useState(
    [{id: "",
    name: "",
    description: "",
    expirationdate: "",
    category:"",
    brand:"",
    price:""}]


)
const [sucess, setSucess] = useState(false)
const [erro, setErro] = useState(false)
const crudproduct = new CrudProductClass

const onFinish = (values) => {
    console.log('Success:', values);
    crudproduct.updateProduct(params.id, values).then(data => {console.log(data); setSucess(true)}).catch(() => setErro(true))
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



    
    useEffect(() =>
    {crudproduct.getByIdProduct(params.id).then(data => setProduct(data)).catch(erro => console.log(erro))},[])
console.log(product)
    return(
    <Card
    bordered={true}
    style={{
      width: 500,
    }}

    >
    <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Favor insira o  Nome do produto!',
            },
          
          
          ]}
        >
          <Input  placeholder={product.name} />
        </Form.Item>
    
        <Form.Item
          label="Descrição"
          name="description"
          rules={[
            {
              required: true,
              message: 'Favor insira a Descrição!',
            },
          
          
          ]}
        >
          <Input placeholder={product.description}/>
        </Form.Item>
        <Form.Item
          label="validade"
          name="expirationdate"
          rules={[
            {
              required: true,
              message: 'Favor insira a Validade!',
            },
          
          
          ]}
        >
          <Input placeholder={product.expirationdate} />
        </Form.Item>
        <Form.Item
          label="Categoria"
          name="category"
          rules={[
            {
              required: true,
              message: 'Favor insira a categoria!',
            },
          
          
          ]}
        >
          <Input placeholder={product.category} />
        </Form.Item>
        <Form.Item
          label="marca"
          name="brand"
          rules={[
            {
              required: true,
              message: 'Favor insira a marca!',
            },
          
          
          ]}
        >
          <Input placeholder={product.brand} />
        </Form.Item>
        <Form.Item
          label="Preço"
          name="price"
          rules={[
            {
              required: true,
              message: 'Favor insira Descrição do Preço!',
            },
          
          
          ]}
        >
          <Input placeholder={product.price}/>
        </Form.Item>
        
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Atualizar
          </Button>
        </Form.Item>
    
        
        </Form>
        
        {sucess &&
     <Space
     direction="vertical"
     style={{
       width: '20%',
     }}
   >
     <Alert
       message="Atualizado com Sucesso"
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
            width: '30%',
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
        
        </Card>
        )



}

export default UpdateProduct