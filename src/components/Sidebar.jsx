import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';
import SidebarItem from  "./SidebarItem";
import { BiSolidDrink } from "react-icons/bi";
import {MdCleanHands, MdCleaningServices , MdOutlineHealthAndSafety}  from "react-icons/md";
import { GiFruitBowl, GiSlicedBread } from "react-icons/gi";
import { PiBowlFoodBold, PiLeafBold } from "react-icons/pi";
import {  IoIceCreamOutline } from "react-icons/io5";
import { LuCat } from "react-icons/lu";
import { Link } from "react-router-dom";

const ConteinerSidebar= styled.div`
height: 100%;
width: 300px;
background-color: #EDEEF0;
position: fixed;
top: 0px;
left: 0px;
left: ${props => props.sidebar ? '0' : '-100%'};
animation: showSidebar .4s;


> svg {
    position: fixed;
    cursor: pointer;
    margin-top: 32px;
    margin-left: 32px;

}


@keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
margin-top: 100px;
z-index: 1;
position: fixed;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffff; 
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 15px 20px;
  width: 255px;
  height: 20px;
  color: #222;
  z-index: 1;

  > svg {
    margin: 0 20px;
    color: #222;
    width: 20px;
    margin-right: 15px;
  }

  &:hover {
    background-color: #2870BD;
    }
`;

 export const Svg = styled.div`
display: flex;
margin-right: 20px;



`;


const Sidebar =({ active}) =>{

   const Closesidebar =()=>{
    active(false)
   }


    return(
  <>
  
  <ConteinerSidebar sidebar={active}>
  <AiOutlineClose size={30} color="#222" onClick={Closesidebar}/>

  <Content>

  <Link to="/Bebidas"><SidebarItem Icon={BiSolidDrink} Text="Bebidas"/></Link>
  <Link to="/Higiene"><SidebarItem Icon={MdCleanHands} Text="Higiene"/></Link>
  <Link to="/Frescos"><SidebarItem Icon={GiFruitBowl} Text="Frescos"/></Link>
  <Link to="/Mercearia"><SidebarItem Icon={PiBowlFoodBold} Text="Mercearia"/></Link>
  <Link to="/Limpeza"><SidebarItem Icon={MdCleaningServices} Text="Limpeza"/></Link>
  <Link to="/Congelados"><SidebarItem Icon={IoIceCreamOutline} Text="Congelados"/></Link>
  <Link to="/saude"><SidebarItem Icon={MdOutlineHealthAndSafety} Text="Saúde"/></Link>
  <Link to="/Animais"><SidebarItem Icon={LuCat} Text="Animais"/></Link>
  <Link to="/padaria"><SidebarItem Icon={GiSlicedBread} Text="Padaria"/></Link>
  <Link to="/Organicos"><SidebarItem Icon={PiLeafBold} Text="Organicos"/></Link>
  </Content>
</ConteinerSidebar>

  </>


    )
}




export default Sidebar;