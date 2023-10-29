
import './App.css'
import {Outlet} from "react-router-dom";
import Login from './pages/Login';
import CreateAccount from './pages/createAccount';
//fazer um box shadow no header
// fazer pastas com o cada coisa tipo header com pasta de header
//fazer o houver nos botões
function App() {
return (
  <div>
   <Outlet/>
   
 </div>
  )
}

export default App
