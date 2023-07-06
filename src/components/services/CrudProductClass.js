
class CrudProductClass{

  getAllProduct = async () => {

  const result = await  fetch("http://localhost:3004/product/").then(data => data.json())
  return result  
  }

  getByIdProduct = async (id) => {
const result = await fetch(`http://localhost:3004/product/${id}`).then(data => data.json())
return result
  }

  postProduct = async (data) => {
      
    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)}
    
  const result =  await fetch('http://localhost:3004/product/',requestOptions)

  return result

  }

  updateProduct = async(id, body) =>{

    const requestOptions = {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)}

const result = await fetch('http://localhost:3004/product/'+id, requestOptions).then(data => console.log(data));
return result
  }

   deleteProduct = async (id) => {
    
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' }}
      //body: JSON.stringify(body)}
    const result =  await fetch('http://localhost:3004/product/'+id, requestOptions)
      return result
  }

}
export default CrudProductClass