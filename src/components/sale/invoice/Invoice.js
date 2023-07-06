import { Card, Row, Table } from "antd"
import { useParams } from "react-router-dom"
import CrudSaleClass from "../../services/crudsale/CrudSale"
import { useEffect, useState } from "react"

const Invoice = () =>{

        const [sale, setSale] = useState([])
        const id = useParams()
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
                  size:'2%'
                  
                
                },
                {
                  title: 'Preço com quantidade',
                  dataIndex: 'priceUpdate',
                  
                
                }
                
                
                  ]
        
        console.log(id)

        const crudsale = new CrudSaleClass
        
        useEffect(() => {crudsale.getByIdSale(id.id).then(data => setSale(data)).then(()=> console.log(sale))},[])
        console.log(sale)
        
        
        


return(
    <Card title="NOTA FISCAL" style={{ width: 1200, height:800, borderColor:"black"}}>


<Card  title="Nome Empresa" style={{ width: 200, height:120,
        marginTop: 30, borderColor:"Highlight"}} >

JNSTOCK

</Card>
<Row>
    
        <Card  title="Produtos" style={{ width: 450, height:500,
        marginTop: 30, borderColor:"Highlight"}} >
                <Table columns={columns} dataSource={sale.products}  />

        </Card>
        <Card  title="Valor Total"  style={{ width: 200, height:100,
        marginTop: 30, borderColor:"Highlight"}} >

                {sale.valueTotal}

</Card>
<Card  title="Cliente"  style={{ width: 200, height:100,
        marginTop: 30, borderColor:"Highlight"}} >
{sale.client}

</Card>
<Card  title="Vendedor"  style={{ width: 200, height:100,
        marginTop: 30, borderColor:"Highlight"}} >
{sale.seller}

</Card>
</Row>

    </Card>

)

}

export default Invoice