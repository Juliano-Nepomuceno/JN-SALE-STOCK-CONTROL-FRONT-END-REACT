
import { ApartmentOutlined, AppstoreOutlined, LikeFilled, MailOutlined, SettingOutlined, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Card, Menu } from 'antd';
import { useState } from 'react';
import { FcBullish, FcManager, FcPaid, FcReadingEbook, FcShipped } from 'react-icons/fc';
import { Link, Outlet } from "react-router-dom";
 
//import { useContext } from "react";
//import userContext from "../Login/UserContext";

function Home(){
    const items = [
      
        {
            label: 'PRODUTO',
            key: 'SubMenuProduct',
            icon: <FcPaid />,
            
            children: [
              {
                type: 'group',
                label: 'Produto',
                children: [
                  {
                    label: (
                      <Link to={'/produto/listarproduto'}>Listar Produto(Atualizar e Deletar)</Link>
                    ),
                    key: 'productlist',
                    
                    
                  },
                  {
                    label: (
                      <Link to={'/produto/criarproduto'}>Criar Produto</Link>
                    ),
                    key: 'productcreate',
                  },
                ],
              },
             
              
            ],
          },
         
        
      
        {
          label: 'VENDEDOR',
          key: 'SubMenuSeller',
          icon: <FcManager/>,
          children: [
            {
              type: 'group',
              label: 'Vendedores',
              children: [
                {
                  label: (
                    <Link to={'/vendedor/listarvendedor'}>Listar Produto(Atualizar e Deletar)</Link>
                  ),
                  key: 'sellerupdate',
                },
                {
                  label: (
                    <Link to={'/vendedor/criarvendedor'}>Criar Vendedor</Link>
                  ),
                  key: 'selercreate:2',
                },
              ],
            },
            
            
          ],
        },

        {
          label: 'CLIENTE',
          key: 'SubMenuClient',
          icon: <FcReadingEbook />,
          children: [
            {
              type: 'group',
              label: 'Clientes',
              children: [
                {
                  label: (
                    <Link to={'/cliente/listarcliente'}>Listar Cliente(Atualizar e Deletar)</Link>
                  ),
                  key: 'clientupdate',
                },
                {
                  label: (
                    <Link to={'/cliente/criarcliente'}>Criar Cliente</Link>
                  ),
                  key: 'createclient',
                },
              ],
            },
            
            
            
            
          ],
        },

        {
          label: 'VENDA',
          key: 'SubMenuSale',
          icon: <FcShipped />,
          children: [
            {
              type: 'group',
              label: 'VENDAS',
              children: [
                {
                  label: (
                    <Link to={'/venda/listarvendas'}>Listar Venda(Emitir Nota e Deletar)</Link>
                  ),
                  key: 'saleupdate',
                },
                {
                  label: (
                    <Link to={'/venda/criarvendas'}>Criar Venda</Link>
                  ),
                  key: 'createsale',
                },
                
              ],
            },
            
            
            
            
          ],
        },
        {
         
          label: (
            <Link to={'/rank'}>RANK DE CLIENTES E VENDEDORES</Link>
          ),
          icon:<FcBullish/>
        },

        {
          label:"BEM VINDO",
          key: 'sair',
        },
      ];
   
    


    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return (
      <Card style={{
        width: 1500,
        height:700,
        borderColor:"gray"
      }}>
      <Menu
        onClick={onClick}
        theme="dark"
        style={{
          width: 900,
          
        }}
        
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
        items={items}
      />
      
      <Outlet></Outlet>
      </Card>
      
    )  };




export default Home;

