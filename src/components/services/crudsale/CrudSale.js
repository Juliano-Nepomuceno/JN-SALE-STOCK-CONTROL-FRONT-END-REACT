
class CrudSaleClass{

    getAllSale = async () => {
  
    const result = await  fetch("http://localhost:3004/sale/").then(data => data.json())
    return result  
    }
  
    getByIdSale = async (id) => {
  const result = await fetch(`http://localhost:3004/sale/${id}`).then(data => data.json())
  return result
    }
  
    postSale = async (data) => {
        
      const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)}
      
    const result =  await fetch('http://localhost:3004/sale/',requestOptions)
  
    return result
  
    }
  
    updateProduct = async(id, body) =>{
  
      const requestOptions = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)}
  
  const result = await fetch('http://localhost:3004/sale/'+id, requestOptions).then(data => console.log(data));
  return result
    }
  
     deleteSale= async (id) => {
      
      const requestOptions = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }}
        //body: JSON.stringify(body)}
      const result =  await fetch('http://localhost:3004/sale/'+id, requestOptions)
        return result
    }
  
  }
  export default CrudSaleClass