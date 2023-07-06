import { useEffect, useState } from "react"
import CrudSaleClass from "../crudsale/CrudSale"
import CrudClientClass from "../../services/crudclient/CrudClient";



class ClientRankClass{

   
 async  countClient(rangeDateFrom , rangeDateTo){

    var arrayList = []
    var crudclient = new CrudClientClass

  return await crudclient.getAllClient().then( data => data.map( data =>   this.countSaleClient(data.name,rangeDateFrom,rangeDateTo ))).then(data=> arrayList.push(...data)).then(() => {return  arrayList}).catch(erro => console.log("Intervalo sem endas"))


  

  }

    countSaleClient (nameclient, rangeDateFrom , rangeDateTo){

    var listClient={}
    var listClientAll=[]
    var listClientTotal=[]
    
    var name
    var quantity

    
    
     const crudsale = new CrudSaleClass
        
   //crudsale.getAllSale().then(data => data.filter(data =>  (data.seller==nameseller))).then(data => (data.filter(data => new Date(data.date).getTime() <= rangeDateTo && new Date(data.date).getTime() >= rangeDateFrom) )).then(data => {sellerRank.name = data[0].seller; sellerRank.quantity = data.length}).then(data => console.log(sellerRank))
   crudsale.getAllSale().then(data => data.filter(data =>  (data.client===nameclient))).then(data => (data.filter(data => new Date(data.date).getTime() <= rangeDateTo && new Date(data.date).getTime() >= rangeDateFrom) )).then(data => {listClient.name=data[0].client;listClient.quantity=data.length}).then(()=> {return listClient}).catch(erro => console.log("Intervalo sem vendas"))

//listSellerTotal = listSellerAll.map(data => listSellerTotal[data[0]])
//console.log(listSellerAll[0])
   //.then(data => data.map(data =>console.log(data)))
    //const resultt = result.filter(data => data.seller==nameseller)
    
    return listClient

   
    

}


    
}




export default ClientRankClass