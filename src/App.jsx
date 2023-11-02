
import './App.css'
import {Outlet} from "react-router-dom";
import Login from './pages/Login';
import CreateAccount from './pages/createAccount';

// fazer pastas com o cada coisa tipo header com pasta de header

function App() {
return (
  <div>
   <Outlet/>
   
 </div>
  )
}

export default App
