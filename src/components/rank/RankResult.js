import { Table } from "antd";
import { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { rankSellerContext } from "./Rank";

const RankResult = () =>{
    //const[rankSeller, setRankSeller]= useState([])

    const {state} = useLocation()
    const seller = state
    console.log(seller)

    const [rankSeller, setRankSeller] = useState()
    
    const columns = [
  
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Quantidade',
          dataIndex: 'quantity',
          key: 'quantity',
         
        },
        
      ];

      return(<Table dataSource={rankSeller} columns={columns} />)

}

export default RankResult