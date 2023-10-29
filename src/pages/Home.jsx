import { Headerhome } from "../components/HeaderStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Sidebar from "../components/Sidebar";




const Home = () => {
  const [sidebar, setSidebar] = useState(false)

  const ShowSidebar = () => setSidebar (!sidebar)

    return(
        <>
        <Headerhome>
        <GiHamburgerMenu size={30} color="#222" onClick={ShowSidebar}/>
        {sidebar && <Sidebar active={setSidebar}/>}

        </Headerhome>
        
        </>
    )
}


export default Home;