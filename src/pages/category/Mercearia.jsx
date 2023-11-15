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
import { TitleCategory, TitleConteiner } from "../../components/titles";
import { useState, useEffect } from "react";
import { DivProdutos } from '../../components/BoxProdutos';
import BoxProdutos from "../../components/BoxProdutos";




const Mercearia = ()=>{
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar (!sidebar)
    
    const [mercearia, setMercearia] = useState([]);

    useEffect(() => {
      const fetchmercearia = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/buscar_mercearia', {
            method: 'GET',  // ou qualquer outro método que você precise
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',  // Isso é equivalente a withCredentials: true
          });
    
          const data = await response.json();
          setMercearia(data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
      fetchmercearia();
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
   <ImagemTitulo src="https://i.ibb.co/MB5ZpL6/Mercearia.jpg" alt="Mercearia"/>
   <TitleCategory>Mercearia</TitleCategory>

  </TitleConteiner>



<DivProdutos>

{mercearia.slice(0, 3).map((mercearia)=>(
<BoxProdutos
 ImgSrc="https://i.ibb.co/WcWXH6p/nivea-sabonete.jpg"
 DescricaoProduto={mercearia.nome}
 PrecoProduto={mercearia.descricao}
 />
 ))}
  
</DivProdutos>





</>


    )
}


export default Mercearia;