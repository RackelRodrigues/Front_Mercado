import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';
import SidebarItem from  "./SidebarItem";
import { BiSolidDrink } from "react-icons/bi";
import {MdCleanHands, MdCleaningServices , MdOutlineHealthAndSafety}  from "react-icons/md";
import { GiFruitBowl, GiSlicedBread } from "react-icons/gi";
import { PiBowlFoodBold, PiLeafBold } from "react-icons/pi";
import {  IoIceCreamOutline } from "react-icons/io5";
import { LuCat } from "react-icons/lu";

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


  > svg {
    margin: 0 20px;
    color: #222;
    width: 20px;
  }

  &:hover {
    background-color: #DCDCDC;
    }
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
   <SidebarItem Icon={BiSolidDrink} Text="Bebidas"/>
   <SidebarItem Icon={MdCleanHands} Text="Higiene"/>
   <SidebarItem Icon={GiFruitBowl} Text="Frescos"/>
   <SidebarItem Icon={PiBowlFoodBold} Text="Mercearia"/>
   <SidebarItem Icon={MdCleaningServices} Text="Limpeza"/>
   <SidebarItem Icon={IoIceCreamOutline} Text="Congelados"/>
   <SidebarItem Icon={MdOutlineHealthAndSafety} Text="Saúde"/>
   <SidebarItem Icon={LuCat} Text="Animais"/>
   <SidebarItem Icon={GiSlicedBread} Text="Padaria"/>
   <SidebarItem Icon={PiLeafBold} Text="Organicos"/>
  </Content>
</ConteinerSidebar>

  </>


    )
}




export default Sidebar;