import { useParams } from "react-router-dom"
import CrudProductClass from "../../services/CrudProductClass"
import { useEffect, useState } from "react"
import { Alert, Button, Card, Form, Input, Space } from "antd"
import CrudSellerClass from "../../services/crudseller/CrudSellerClass"

const UpdateSeller = () => {

const params = useParams()
const[seller, setSeller] = useState(
    [{
        id: "",
        name: "",
        cpf: "",
        address: "",
        phone: "",
        wage: "",
        admissiondate: "",
        username: ""
      },]


)
const [sucess, setSucess] = useState(false)
const [erro, setErro] = useState(false)
const crudseller = new CrudSellerClass

const onFinish = (values) => {
    console.log('Success:', values);
    crudseller.updateSeller(params.id, values).then(data => {console.log(data); setSucess(true)}).catch(() => setErro(true))
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



    
    useEffect(() =>
    {crudseller.getByIdSeller(params.id).then(data => setSeller(data)).catch(erro => console.log(erro))},[])

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
          label="Nome"
          name="name"
          rules={[
            {
              required: true,
              message: 'Favor insira o  Nome do produto!',
            },
          
          
          ]}
        >
          <Input  placeholder={seller.name} />
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
          <Input placeholder={seller.address}/>
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
          <Input placeholder={seller.phone} />
        </Form.Item>
        <Form.Item
          label="Fone"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Favor insira a categoria!',
            },
          
          
          ]}
        >
          <Input placeholder={seller.wage} />
        </Form.Item>
        <Form.Item
          label="Salario"
          name="wage"
          rules={[
            {
              required: true,
              message: 'Favor insira a marca!',
            },
          
          
          ]}
        >
          <Input placeholder={seller.username} />
        </Form.Item>
        <Form.Item
          label="Data de admissão"
          name="admissiondate"
          rules={[
            {
              required: true,
              message: 'Favor insira Descrição do Preço!',
            },
          
          
          ]}
        >
          <Input placeholder={seller.admissiondate}/>
        </Form.Item>
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Favor insira Descrição do Preço!',
            },
          
          
          ]}
        >
          <Input placeholder={seller.username}/>
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

export default UpdateSeller