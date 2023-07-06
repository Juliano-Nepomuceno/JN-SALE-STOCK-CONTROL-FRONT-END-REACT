import React from "react"
import {useForm} from "react-hook-form"
//import { useNavigation } from "@react-navigation/native"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Card, Checkbox, Form, Input } from 'antd';

//import { useState } from "react"




function Login(props){

   // const [form, setForm] = useState()

   const navigate = useNavigate()
   
    const {register, handleSubmit } = useForm()
   const {state} = useLocation()
   
   const  onFinish = (form) =>  {navigate('/authuserlogin',{state: form})}
   const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    
    var islogin = state
    
     

return(
<div>
    <Card style={{
        width: 500,
      }}
      bordercolor="red"
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
      label="Username"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
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

    {islogin && 
        <p>Usuario e senha errados</p>}
    </Card>
    

        
        </div>
    

    )

    


}
export default Login