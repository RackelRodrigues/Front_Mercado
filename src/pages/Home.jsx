import { Headerhome } from "../components/HeaderStyle";
import  Styled  from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiSearch} from "react-icons/bi"
import { useState, useEffect} from "react";
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
import axios from 'axios';


const BoxHome = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #fff;
 padding-bottom: 120px;
  margin: 0 auto;
 
`;




export const DivHome = Styled.div`
background-color: #fff;



`;


const Home = () => {

  const apiKey = '79174b714194e424260a290634fd0441';



//mostar e fechar sidebar
  const [sidebar, setSidebar] = useState(false)

  const ShowSidebar = () => setSidebar (!sidebar)

  const [promocoes, setPromocoes] = useState([]);

  useEffect(() => {
    const fetchPromocao = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/buscar_promocoes', {
          method: 'GET',  // ou qualquer outro método que você precise
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',  // Isso é equivalente a withCredentials: true
        });
  
        const data = await response.json();
        setPromocoes(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
  
    fetchPromocao();
  }, []);

  //const [files, setFiles] = useState([]);

 // useEffect(() => {
   // const fetchData = async () => {
     // try {
        //const response = await axios.get('http://localhost:5000/google-api');
       // setFiles(response.data.files);
       // console.log(response.data.files);
     // } catch (error) {
       // console.error('Erro ao obter dados do Google Drive:', error);
    //  }
  //  };

  //  fetchData();
 // }, []);

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
{promocoes.slice(0, 6).map((promocao, index)=>(
  
  <Boxpromocao 
  key={index}
  Descricao={promocao.nome} 
  Desconto={promocao.porcentagem}
  Precopromo={promocao.promocao} 
  Precoreal={promocao.descricao}
  SrcReal="https://i.ibb.co/9GvnfyS/durar-feij-o.jpg"
  />
  ))}

  </BoxHome>
        </DivHome>
    )
}


 export default Home;