import { useEffect, useState } from "react"
import CrudSaleClass from "../crudsale/CrudSale"
import CrudProductClass from "../../services/CrudProductClass";



class ProductRankClass{

   
 async  countProduct(rangeDateFrom , rangeDateTo){

    var arrayList = []
    var crudproduct = new CrudProductClass
    var crudsale = new CrudSaleClass

   await crudproduct.getAllProduct().then( data => data.map( data =>   this.countSaleCrudProductClass(data.name,rangeDateFrom,rangeDateTo ))).then(data=> arrayList.push(...data)).then(() => {return  arrayList}).catch(erro => console.log("Intervalo sem endas"))

var teste = await crudsale.getAllSale().then(data => data.map(data =>{ return data.products})).then(data => data.filter(data => data[0].name))
  
return teste
  }

    countSaleProduct (nameproduct, rangeDateFrom , rangeDateTo){

    var listProduct={}
    var listProductAll=[]
    var listProductTotal=[]
    
    var name
    var quantity

    
    
     const crudsale = new CrudSaleClass
        
   //crudsale.getAllSale().then(data => data.filter(data =>  (data.seller==nameseller))).then(data => (data.filter(data => new Date(data.date).getTime() <= rangeDateTo && new Date(data.date).getTime() >= rangeDateFrom) )).then(data => {sellerRank.name = data[0].seller; sellerRank.quantity = data.length}).then(data => console.log(sellerRank))
  // crudsale.getAllSale().then(data => filter(data.products)).the(data => data.filter(data =>  (data.name===nameproduct))).then(data => (data.filter(data => new Date(data.date).getTime() <= rangeDateTo && new Date(data.date).getTime() >= rangeDateFrom) )).then(data => {listProduct.name=data[0].product;listProduct.quantity=data.length}).then(()=> {return listProduct}).catch(erro => console.log("Intervalo sem vendas"))
  crudsale.getAllSale()
//listSellerTotal = listSellerAll.map(data => listSellerTotal[data[0]])
//console.log(listSellerAll[0])
   //.then(data => data.map(data =>console.log(data)))
    //const resultt = result.filter(data => data.seller==nameseller)
    
    return listProduct

   
    

}


    
}




export default ProductRankClass