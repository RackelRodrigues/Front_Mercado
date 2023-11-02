import { Headerhome } from "../components/HeaderStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiSearch} from "react-icons/bi"
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import {FiShoppingCart} from "react-icons/fi"
import { ConteinerHome } from "../components/HeaderStyle";
import {BsPersonCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
import{Boxinputheader, InputHeader} from "../components/Inputstyle";
import {Promobox } from "../components/logo"
import { Svg } from "../components/Sidebar";
import Mysliper from '../components/mysliper';




const Home = () => {
  const [sidebar, setSidebar] = useState(false)

  const ShowSidebar = () => setSidebar (!sidebar)

    return(
        <>
        <Headerhome>
        <GiHamburgerMenu size={30} color="#222" onClick={ShowSidebar}/>
        {sidebar && <Sidebar active={setSidebar}/>}


        <ConteinerHome>
        <Boxinputheader>
         <InputHeader type='text'/>
         <BiSearch size={25} color="#222"/>
        </Boxinputheader>
     <Svg>
        <Link to="/Login">
          <BsPersonCircle size={30} color="#222"/>
          </Link>
      </Svg>
        <Link to="/Carrinho">
          <FiShoppingCart size={30} color="#222"/>
          </Link>
     
        </ConteinerHome>
        </Headerhome>

        
        <Promobox>
      <Mysliper/>
       </Promobox>
  

        </>
    )
}


export default Home;