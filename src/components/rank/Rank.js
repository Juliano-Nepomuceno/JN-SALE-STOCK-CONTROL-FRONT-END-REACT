import { createContext, useContext, useEffect, useState } from "react";
import SellerRankClass from "../services/rankclass/SellerRankClass"
import { Button, Card, Col, DatePicker, Row, Space, Table } from 'antd';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import RankResult from "./RankResult";
import ClientRankClass from "../services/rankclass/ClientRankClass";
import ProductRankClass from "../services/rankclass/ProductRankClass";



const Rank = () =>{

const { RangePicker } = DatePicker;
const SellerRank = new SellerRankClass
const ClientRank = new ClientRankClass
const ProductRank = new ProductRankClass

const[dataSourceSeller, setDataSourceSeller]=useState()

var[fromto, setFromto] = useState([])

var [rankSeller, setRankSeller] = useState([null])
var [listclient, setListclient]= useState([])
var[rankdata, setRankdata] =useState([])
var[listproduct, setListproduct] =useState([])
var[rankclient, setRankclient] = useState([])
const navigate = useNavigate()


const changeDate = async (value) =>{
    //var dateupdate =[]
   
    
    fromto[0] =  new Date(value[0]).getTime()
    fromto[1] =  new Date(value[1]).getTime()
    rankdata = await   SellerRank.countSeller(fromto[0], fromto[1]);
    listclient =  await ClientRank.countClient(fromto[0], fromto[1]);
    listproduct =  await ProductRank.countProduct(fromto[0], fromto[1]);

    console.log(listproduct)
  }

//useEffect(()=>{SellerRank.countSeller(rangeDateFrom, rangeDateTo).then(data => setRankSeller(data))
//},[])


 const findData = async () =>{

   setRankSeller(rankdata.sort((a,b)=>{return b.quantity - a.quantity}))
   setRankclient(listclient.sort((a,b)=>{return b.quantity - a.quantity}))
   
 
  }
 
const columns = [
  
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    width: '30',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantity',
    key: 'quantity',
    width: '5',
   
  },
  
];



return(
    <div>
    
    <Card title="Selecione o intervalo" style={{
        width: 400,
      }}>
    

   
    
    <Space direction="vertical" size={12} >
    <RangePicker   onChange={changeDate} />
    
  </Space>
  <Button type="primary" onClick={findData}>Buscar</Button>
  </Card>
  
  <Row>
  
  <Col span={12}>
  <Card title="Rank de Vendedores">
<Table dataSource={rankSeller} columns={columns} />
</Card>
  </Col>

      
  <Col span={12}>
    
  <Card title="Rank de Clientes">
<Table dataSource={rankclient} columns={columns} />
  


  </Card>
  </Col>
  </Row>
  </div>

)

}

export default Rank