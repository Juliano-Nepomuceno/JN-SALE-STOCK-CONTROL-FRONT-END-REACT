import { Children, useEffect, useState } from "react"
import { FcDiploma1, FcDocument, FcEditImage  } from 'react-icons/fc';
import {FcDeleteDatabase} from 'react-icons/fc'
import {  Button, Card, Space, Table } from 'antd';
import CrudProductClass from "../../services/CrudProductClass";
import { Link } from "react-router-dom";
import CrudSaleClass from "../../services/crudsale/CrudSale";
//import Link from "antd/es/typography/Link";

//import CrudProduct from "../../services/crudproduct/CrudProduct";

 const ListSale = () => {

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  
     const [sale, setSale] = useState([{id:'',name:'',children:[{}],seller:'',client:'' }]);
    const [listproduct, setListproduct] = useState([])
    const [saleupdate, setSaleupdate] = useState([{id:'',name:'',children:[{}],seller:'',client:'' }]);

     //const [salelist, setSalelist] = useState([])
     
     //var salelist = sale.map((value, index, array) =>  );
     //console.log(salelist)


     const dataa = [{
     
    

     children:[{
      name:"biscoito",  
      
      
        price:'15',
       quantity: '52',
       priceUpdate:'38',
       }],
seller:'oioi',
client:'haha',
date:'adasd'

    },
  
  {

children:[{name:'aaaddd', price:'34',quantity:'80', priceUpdate:'37'},{name:'aaaddd', price:'34',quantity:'80', priceUpdate:'37'}],
seller:'Arnaldo',
client:'Galvao',
date:'ontem',
}
  
  ]
         

         
                              
                
    

    useEffect(() => {setListproduct([{
      
      title: 'products',
      
      
                                                  
          children: 
          
          [
      {        
        
               
        title:'name',
        dataIndex: 'name',
        key:'name',
        
        
        
        
           
        },
        {
          title:'Preço',
          dataIndex: 'price',
          key:"price"
          },
          {
            title:'Quantidade',
            dataIndex: 'quantity',
            },
            {
              title:'Preço com quantidade',
              dataIndex: 'updatePrice',
              },
      ]
    
    },
    {
      title: 'Vendedor',
      dataIndex: 'seller',
      key: 'address',
    },
    {
      title: 'Cliente',
      dataIndex: 'client',
      key: 'address',
    },
    ]); console.log()}, [])

    


 //var crudProduct = new CrudProduct();
//const teste = crudProduct.getProduct()
//console.log(teste)


const crudsale = new CrudSaleClass


  useEffect(() => {crudsale.getAllSale().then(data => setSale(data))}, [])

sale.map(value =>{ Object.assign(value,{children:value.products, key:value.id,});})
  
  
  console.log(sale)
useEffect( () =>{

  
//setSaleupdate(saleupdate.children = sale.products)
//id:'2', date:'hoje',seller:'Joao',client:'Alberto', key:'02',
//children:[{
//name:'biscoito',  
//price:'15',
//quantity: '52',
//priceUpdate:'38',
//},
//{
 // name:'carne',  

  //price:'20',
  //quantity: '34',
  //priceUpdate:'100'}
//]},


//{id:'3', date:'amanha',seller:'Pedro',client:'Carlos', key:'03', 

//children:[{
//name:'amendoin',  
//price:'15',
//quantity: '52',
//priceUpdate:'38',


//},
//{
 // name:'sanduiche',  
 // price:'23',
 // quantity: '35',
 // priceUpdate:'70',
  
  
  //},

  
//]}
//])
}, [])


 

//setListproduct([])
  
 
const columnss =[

  
{
  
  

  title:'Produtos',
  
 
  children: [{
    
    title:'Nome dos Produtos (Clique para expandir)',
dataIndex:'name',


  },
  {
    title:'Preco',
    
        name:'price',
    dataIndex:'price',
    
      },
      {
        title:'Quantidade',
      
            name:'quantity',
        dataIndex:'quantity',
        width:'15',
        
          },
          {
            title:'Preço Atualizado',
            
                name:'priceUpdate',
            dataIndex:'priceUpdate',
            
              }

]
  
  
},
{
  title: 'Vendedor',
  
  dataIndex: 'seller',

},
{
  title: 'Cliente',
 
  dataIndex: 'client',
  
},
{
  title: 'Data',

  dataIndex: 'date',
  
}
]


const columns = [
    {
      title: `ID`,
      
      dataIndex: 'id',
      
    },
    {
      title: 'Data',
     
      dataIndex: 'date',
      
      

      
    },
    
    {
             title:"Produtos  (Clique para expandir)",  
             
             
                    
          children:[
      {        
           
        title:'Nome Do Produto',
       
        dataIndex: 'name',
        
              
                  
        },
        {
          title:'Preço',
         
          dataIndex: 'price',
          
          },
          {
            title:'Quantidade',
            dataIndex: 'quantity',
            
            },
            {
              title:'Preço com quantidade',
             
              dataIndex: 'updatePrice',
              
              },
      ]
    
    },
    {
      title: 'Vendedor',
      
      dataIndex: 'seller',
      
    },
    {
      title: 'Cliente',
      
      dataIndex: 'client',
     
    },

    {
      title: 'Valor Total',
       
      dataIndex: 'valueTotal',
     
    },
    
         
    {
      title: 'Imprimir nota ou Deletar',
     
      
      render: (venda) => (
        <Space size="large">
              <Link to={`/venda/nota/${venda.id}`}><FcDiploma1 size="2rem"/></Link>
              <Link to={`/venda/deletarvenda/${venda.id}`}><FcDeleteDatabase size="2rem"/></Link>
              
              
          
        </Space>
      ),
    },

    
    
   
  ];
  const data = sale


 return(


<Table  columns={columns}  dataSource={sale}   />



)


}

export default ListSale