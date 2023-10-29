import { Headerhome } from "../components/HeaderStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {FiShoppingCart} from "react-icons/fi"
import { ConteinerHome } from "../components/HeaderStyle";



const Home = () => {
  const [sidebar, setSidebar] = useState(false)

  const ShowSidebar = () => setSidebar (!sidebar)

    return(
        <>
        <Headerhome>
        <GiHamburgerMenu size={30} color="#222" onClick={ShowSidebar}/>
        {sidebar && <Sidebar active={setSidebar}/>}


        <ConteinerHome>
        <FiShoppingCart size={25} color="#222"/>
        </ConteinerHome>
        </Headerhome>
        
        </>
    )
}


export default Home;