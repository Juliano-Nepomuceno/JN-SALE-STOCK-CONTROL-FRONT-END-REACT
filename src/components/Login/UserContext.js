
import { createContext,  useState } from "react";
import RouterConf from "../../Router/RouterConf";

export const UserContext = createContext(false)

export function UserContextProvider(){

  var [isLogin, setIslogin] = useState(false) 
  var [name, setName] = useState("") 
  
  
   
console.log(isLogin)
console.log(name)

 
return(
<UserContext.Provider value={[isLogin, setIslogin, name, setName]}>
<RouterConf></RouterConf>

</UserContext.Provider>
)
}

export default UserContextProvider;
