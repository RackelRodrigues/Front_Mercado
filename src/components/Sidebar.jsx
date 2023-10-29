import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';


 const conteinerSidebar= styled.div`

height: 100%;
width: 300px;
background-color: #EDEEF0;
position: fixed;
top: 0px;
left: 0px;



`;



const Sidebar =({ active}) =>{

   const Closesidebar =()=>{
    active(false)
   }


    return(
  <>
  <conteinerSidebar sidebar={active}>
<AiOutlineClose size={30} color="#222" onclick={Closesidebar}/>




  </conteinerSidebar>




  </>


    )
}




export default Sidebar;