
class CrudSellerClass{

  getAllSeller = async () => {

  const result = await  fetch("http://localhost:3004/seller/").then(data => data.json())
  return result  
  }

  getByIdSeller = async (id) => {
const result = await fetch(`http://localhost:3004/seller/${id}`).then(data => data.json())
return result
  }

  postSeller = async (data) => {
      
    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)}
    
  const result =  await fetch('http://localhost:3004/seller/',requestOptions)

  return result

  }

  updateSeller = async(id, body) =>{

    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)}

const result = await fetch('http://localhost:3004/seller/'+id, requestOptions).then(data => console.log(data));
return result
  }

   deleteProduct = async (id) => {
    
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' }}
      //body: JSON.stringify(body)}
    const result =  await fetch('http://localhost:3004/seller/'+id, requestOptions)
      return result
  }

}
export default CrudSellerClass