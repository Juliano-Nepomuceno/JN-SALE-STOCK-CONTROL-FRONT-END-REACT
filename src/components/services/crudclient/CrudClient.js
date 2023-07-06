
class CrudClientClass{

    getAllClient = async () => {
  
    const result = await  fetch("http://localhost:3004/client/").then(data => data.json())
    return result  
    }
  
    getByIdClient = async (id) => {
  const result = await fetch(`http://localhost:3004/client/${id}`).then(data => data.json())
  return result
    }
  
    postClient = async (data) => {
        
      const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)}
      
    const result =  await fetch('http://localhost:3004/client/',requestOptions)
  
    return result
  
    }
  
    updateClient = async(id, body) =>{
  
      const requestOptions = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)}
  
  const result = await fetch('http://localhost:3004/client/'+id, requestOptions).then(data => console.log(data));
  return result
    }
  
     deleteClient = async (id) => {
      
      const requestOptions = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }}
        //body: JSON.stringify(body)}
      const result =  await fetch('http://localhost:3004/client/'+id, requestOptions)
        return result
    }
  
  }
  export default CrudClientClass