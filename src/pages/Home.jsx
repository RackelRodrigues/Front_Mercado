import { Headerhome } from "../components/HeaderStyle";
import  Styled  from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiSearch} from "react-icons/bi"
import { useState} from "react";
import Sidebar from "../components/Sidebar";
import {FiShoppingCart} from "react-icons/fi"
import { ConteinerHome } from "../components/HeaderStyle";
import {BsPersonCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
import{Boxinputheader, InputHeader} from "../components/Inputstyle";
import {Promobox } from "../components/logo"
import { Svg } from "../components/Sidebar";
import Mysliper from '../components/mysliper';
import  Boxpromocao from "../components/boxpromoção";


const BoxHome = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #fffff;
  margin-bottom: 20px;
  margin: 0 auto;
 
`;




export const DivHome = Styled.div`
background-color: #ffff;


`;


const Home = () => {
  const [sidebar, setSidebar] = useState(false)

  const ShowSidebar = () => setSidebar (!sidebar)

    return(
        <DivHome>
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
      
        <Link to="/Meu Carrinho">
          <FiShoppingCart size={30} color="#222"/>
          </Link>
     
        </ConteinerHome>
        </Headerhome>

        
        <Promobox>
      <Mysliper/>
       </Promobox>
  
<BoxHome>

  <Boxpromocao Descricao="Arroz Pop parbolizado" 
  Desconto="25%" 
  Precopromo="R$7,00" 
  Precoreal="R$5,00"
  SrcReal="https://i.ibb.co/wBqCNmb/produto1arroz.jpg"
  />

<Boxpromocao Descricao="Feijão carioca Carmil" 
  Desconto="40%" 
  Precopromo="R$6,39" 
  Precoreal="R$3,00"
  SrcReal="https://i.ibb.co/f2Vx6by/pacote-de-feij-o.jpg"
  />

  <Boxpromocao Descricao="combo caixas de chocolate" 
  Desconto="15%" 
  Precopromo="R$25,00" 
  Precoreal="R$21,25"
  SrcReal="https://i.ibb.co/d4NL4G1/combo.jpg"
  />

  <Boxpromocao Descricao="Chocolate Nestle Classic" 
  Desconto="10%" 
  Precopromo="R$5,59" 
  Precoreal="R$4,00"
  SrcReal="https://i.ibb.co/hmcjrCx/chocolatr.jpg"
  />

<Boxpromocao Descricao="Chocolate Lacta diamante negro" 
  Desconto="50%" 
  Precopromo="R$9,00" 
  Precoreal="R$4,50"
  SrcReal="https://i.ibb.co/7KXVdzy/chocolate.jpg"
  />

<Boxpromocao Descricao="combo caixas de chocolate" 
  Desconto="15%" 
  Precopromo="R$25,00" 
  Precoreal="R$21,25"
  SrcReal="https://i.ibb.co/d4NL4G1/combo.jpg"
  />
  </BoxHome>
        </DivHome>
    )
}


export default Home;