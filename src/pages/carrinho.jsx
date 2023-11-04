import { Linkstyle } from "../components/linkstyle";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Styled from 'styled-components';





const MeuCarrinho = ()=>{
    return(

    <>





    <AiOutlineArrowLeft size={20} color=""/>
    <Link to="/Home"><Linkstyle> Continue Comprando</Linkstyle></Link>

   </>



    );
}


export default MeuCarrinho;