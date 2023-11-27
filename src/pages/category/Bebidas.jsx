import { ImagemTitulo } from "../../components/logo";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiSearch} from "react-icons/bi"
import Sidebar from "../../components/Sidebar";
import {FiShoppingCart} from "react-icons/fi"
import { ConteinerHome, Headerhome } from "../../components/HeaderStyle";
import {BsPersonCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
import{Boxinputheader, InputHeader} from "../../components/Inputstyle";
import { Svg } from "../../components/Sidebar";
import { useState, useEffect} from "react";
import { TitleCategory, TitleConteiner } from "../../components/titles";
import BoxProdutos from '../../components/BoxProdutos'
import { DivProdutos } from '../../components/BoxProdutos';
import axios from "axios";

const Bebidas = ()=>{
    
const [bebida, setBebida] = useState([]);
const [sidebar, setSidebar] = useState(false)

const ShowSidebar = () => setSidebar (!sidebar)

const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const fetchbebidas= async () => {
      try {
        const response = await fetch('http://localhost:5000/api/Bebida/produtos', {
          method: 'GET',  // ou qualquer outro método que você precise
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',  // Isso é equivalente a withCredentials: true
        });
  
        const data = await response.json();
        setBebidas(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
  
    fetchbebidas();
  }, []);

 

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
      
        <Link to="/Meu Carrinho">
          <FiShoppingCart size={30} color="#222"/>
          </Link>
     
        </ConteinerHome>
        </Headerhome>

      
      
<TitleConteiner>
<ImagemTitulo src="https://i.ibb.co/2sH08v4/Bebidas.jpg" alt="Logo Bebidas"/>
<TitleCategory>Bebidas</TitleCategory>
</TitleConteiner>

   <DivProdutos>
    
{bebidas.slice(0, 3).map((bebidas)=>(
<BoxProdutos
 ImgSrc={bebidas.urlImagem || ""}
 DescricaoProduto={bebidas.nome_produto}
 PrecoProduto={bebidas.valor}
 />
  ))}
   

</DivProdutos>



</>


    )
}


export default Bebidas;