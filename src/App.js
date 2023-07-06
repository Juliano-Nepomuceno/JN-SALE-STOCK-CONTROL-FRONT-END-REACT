
import './App.css';



import React from 'react';
import RouterConf from './Router/RouterConf';
//import userContext, { UserContextProvider } from './components/Login/UserContext';
import AuthUserLogin from './components/Login/AuthUserLogin';
import UserContextProvider, { UserContext } from './components/Login/UserContext';

function App() {
  
    return (
      
    
//<IsLoginProvider value= {true} >
  //    <RouterConf/>
    //  </IsLoginProvider>
<UserContextProvider>
  
</UserContextProvider>

   );
}

export default App;
