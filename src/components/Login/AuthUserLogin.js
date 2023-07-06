
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import RouterConf from "../../Router/RouterConf";
import Login from "./Login";
import UserContextProvider, { UserContext } from "./UserContext";


//import { useParams } from "react-router-dom";
   
//export const IsLogin = createContext({})

function AuthUserLogin(){
    
  //const {form} = useParams();
  const {state} = useLocation()
  const navigate = useNavigate()
 var [isLogin, setIslogin] = useContext(UserContext)
 var[name, setName]=useContext(UserContext)
  
 
  
  const form = state
  
       
  
//console.log(form)
   const authUser = async (form) => {
 
 
    
    const result = await fetch("http://localhost:3004/users").then(data => data.json()).then(data => {for(let i=0; data.length > i; i++){if(form.name === data[i].nome && form.password === data[i].senha){ setName(form.name); console.log(name); return true }  return false;}})
return result

 //.then(data => {if(data == true){setLogin(true); console.log("era true "+login); navigate("/home");} else {navigate("/"); alert("Usuario e senha invalido")};})
}

 authUser(form).then(form => {if (form === true){setIslogin(form); navigate("/home")} else navigate("/",{state:true})})

    //const [islogin, setIslogin] = useState();
         }
      
//export function IsLoginProvider(value){

  //console.log(value)
//var login = false
//login = value.form



//console.log(login)


//return(
//<IsLogin.Provider value={login}>


//<RouterConf/>

//</IsLogin.Provider>
//)
//}

    export default AuthUserLogin;
    
  
    

   



    
