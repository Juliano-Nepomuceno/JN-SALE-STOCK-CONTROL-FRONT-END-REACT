import { useParams } from "react-router-dom"
import CrudProductClass from "../../services/CrudProductClass"
import { useEffect, useState } from "react"
import { Alert, Button, Card, Form, Input, Space } from "antd"
import CrudClientClass from "../../services/crudclient/CrudClient"

const UpdateClient = () => {

const params = useParams()
const[client, setClient] = useState(
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
const crudclient = new CrudClientClass

const onFinish = (values) => {
    console.log('Success:', values);
    crudclient.updateClient(params.id, values).then(data => {console.log(data); setSucess(true)}).catch(() => setErro(true))
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



    
    useEffect(() =>
    {crudclient.getByIdClient(params.id).then(data => setClient(data)).catch(erro => console.log(erro))},[])

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
          <Input  placeholder={client.name} />
        </Form.Item>
    
        <Form.Item
          label="cpf"
          name="cpf"
          rules={[
            {
              required: true,
              message: 'Favor insira a Descrição!',
            },
          
          
          ]}
        >
          <Input placeholder={client.cpf}/>
        </Form.Item>
        <Form.Item
          label="Endereço"
          name="address"
          rules={[
            {
              required: true,
              message: 'Favor insira a Validade!',
            },
          
          
          ]}
        >
          <Input placeholder={client.address} />
        </Form.Item>
        <Form.Item
          label="Fone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Favor insira a Validade!',
            },
          
          
          ]}
        >
          <Input placeholder={client.phone} />
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
       width: '70%',
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

export default UpdateClient