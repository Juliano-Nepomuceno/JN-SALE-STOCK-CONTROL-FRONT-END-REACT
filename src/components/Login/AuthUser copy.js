

import  { createContext } from "react";

//const UserLogin ={nome:"Deusteamo", senha:"oioi",adm:"true"}
export const AuthUser = createContext({nome:"DeusteamoMuuito", senha:"oioi",adm:"true",isLogin:true});

  function  AuthUserProvider({children}){
       
       return(
       
       <AuthUser.Provider>
        {children}
      </AuthUser.Provider>
       
       )

    }




    export default AuthUserProvider;
    

   



    
