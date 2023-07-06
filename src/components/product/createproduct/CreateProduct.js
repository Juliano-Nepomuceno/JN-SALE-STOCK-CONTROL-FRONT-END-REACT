import { Alert, Button, Card, Form, Input, Space } from 'antd';
import CrudProductClass from '../../services/CrudProductClass';
import { useState } from 'react';


function CreateProduct(){

  const [sucess, setSucess] = useState(false)
  const [erro, setErro] = useState(false)
  

const crudproduct = new CrudProductClass

    const onFinish = (values) => {
        console.log('Success:', values);
        crudproduct.postProduct(values).then(data => {setSucess(true); console.log(data)}).catch(erro => {setErro(true); console.log(erro)})
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    
    return(

<Card 
borderColor="gray"
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
      <Input />
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
      <Input />
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
      <Input />
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
      <Input />
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
      <Input />
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
      <Input />
    </Form.Item>
    
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>

    

    </Form>
    <card
    bordered={false}
    style={{
      width: 800,
    }}>
    {sucess &&
     <Space
     direction="vertical"
     style={{
       width: '40%',
     }}
   >
     <Alert
       message="Inserido com Sucesso"
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
</card>

        
        </Card>
    
    )
 
    
    
}

export default CreateProduct