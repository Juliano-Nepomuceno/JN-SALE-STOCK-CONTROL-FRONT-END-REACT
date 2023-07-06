import { useEffect, useState } from "react"
import CrudSaleClass from "../crudsale/CrudSale"
import CrudSellerClass from "../../services/crudseller/CrudSellerClass";



class SellerRankClass{

   
 async  countSeller(rangeDateFrom , rangeDateTo){

    var arrayList = []
    var crudseller = new CrudSellerClass

  return await crudseller.getAllSeller().then( data => data.map( data =>   this.countSaleSeller(data.name,rangeDateFrom,rangeDateTo ))).then(data=> arrayList.push(...data)).then(() => {return  arrayList}).catch(erro => console.log("Intervalo sem endas"))


  

  }

    countSaleSeller (nameseller, rangeDateFrom , rangeDateTo){

    var listSeller={}
    var listSellerAll=[]
    var listSellerTotal=[]
    
    var name
    var quantity

    
    
     const crudsale = new CrudSaleClass
        
   //crudsale.getAllSale().then(data => data.filter(data =>  (data.seller==nameseller))).then(data => (data.filter(data => new Date(data.date).getTime() <= rangeDateTo && new Date(data.date).getTime() >= rangeDateFrom) )).then(data => {sellerRank.name = data[0].seller; sellerRank.quantity = data.length}).then(data => console.log(sellerRank))
   crudsale.getAllSale().then(data => data.filter(data =>  (data.seller===nameseller))).then(data => (data.filter(data => new Date(data.date).getTime() <= rangeDateTo && new Date(data.date).getTime() >= rangeDateFrom) )).then(data => {listSeller.name=data[0].seller;listSeller.quantity=data.length}).then(()=> {return listSeller}).catch(erro => console.log("Intervalo sem vendas"))

//listSellerTotal = listSellerAll.map(data => listSellerTotal[data[0]])
//console.log(listSellerAll[0])
   //.then(data => data.map(data =>console.log(data)))
    //const resultt = result.filter(data => data.seller==nameseller)
    
    return listSeller

   
    

}


    
}




export default SellerRankClass