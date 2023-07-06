import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
//import userContext, { UserContext } from "../components/Login/UserContext";
import { IsLogin } from "../components/Login/AuthUserLogin";
import { UserContext } from "../components/Login/UserContext";

function Protectionroute({children}){
var [islogin, setIslogin] = useContext(UserContext)
  // const isLogin = useContext(UserContext) 
    const navegar = useNavigate()
    console.log(islogin)
    
    useEffect(() =>{
    if(!islogin)
      { navegar("/");}
})
      return children


}
   
export default Protectionroute