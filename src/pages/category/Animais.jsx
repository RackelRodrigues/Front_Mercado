import { ImagemTitulo } from '../../components/logo';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {BiSearch} from "react-icons/bi"
import Sidebar from "../../components/Sidebar";
import {FiShoppingCart} from "react-icons/fi"
import { ConteinerHome, Headerhome } from "../../components/HeaderStyle";
import {BsPersonCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
import{Boxinputheader, InputHeader} from "../../components/Inputstyle";
import { Svg } from "../../components/Sidebar";
import { TitleCategory, TitleConteiner } from '../../components/titles';
import BoxProdutos from '../../components/BoxProdutos'
import { DivProdutos } from '../../components/BoxProdutos';



const Animais = () =>{
    
  const [sidebar, setSidebar] = useState(false)

  const ShowSidebar = () => setSidebar (!sidebar)

  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchanimais= async () => {
      try {
        const response = await fetch('http://localhost:5000/api/buscar_animais', {
          method: 'GET',  // ou qualquer outro método que você precise
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',  // Isso é equivalente a withCredentials: true
        });
  
        const data = await response.json();
        setAnimais(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchanimais();
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
<ImagemTitulo src="https://i.ibb.co/sJGdDhf/Animais.jpg" alt="logo animais"/>
 <TitleCategory>Animais</TitleCategory>
 </TitleConteiner>

<DivProdutos>
 <BoxProdutos
 ImgSrc="https://i.ibb.co/ZLKf0pY/kit-animais.jpg"
 DescricaoProduto="kit higiene para cachorros"
PrecoProduto="R$82,39"
 />


<BoxProdutos
 ImgSrc="https://i.ibb.co/ZLKf0pY/kit-animais.jpg"
 DescricaoProduto="kit higiene para cachorros"
PrecoProduto="R$82,39"
 />

<BoxProdutos
 ImgSrc="https://i.ibb.co/ZLKf0pY/kit-animais.jpg"
 DescricaoProduto="kit higiene para cachorros"
PrecoProduto="R$82,39"
 />

<BoxProdutos
 ImgSrc="https://i.ibb.co/ZLKf0pY/kit-animais.jpg"
 DescricaoProduto="kit higiene para cachorros"
PrecoProduto="R$82,39"
 />
</DivProdutos>

</>

    )
}



export default Animais;