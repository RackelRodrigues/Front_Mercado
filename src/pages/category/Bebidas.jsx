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
        const response = await fetch('http://localhost:5000/api/buscar_bebidas', {
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

  //Aqui é puxar a api do das fotos

  const fetchCategoriaFotos = async (categoria) => {
    try {
      const response = await fetch(`http://localhost:5000/api/fotos/${categoria}`, bebida, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      console.log('Fotos da categoria:', data);
      setBebida(data);
      console.log("data",bebida);
    } catch (error) {
      console.error('Erro ao buscar fotos da categoria:', error);
    }
  };

  // Exemplo de como chamar a função para buscar fotos de uma categoria específica
  useEffect(() => {
    const categoria = 'Bebida';
    fetchCategoriaFotos(categoria);
  }, []);
  console.log(bebida)
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
    
{bebidas.slice(0, 3).map((bebidas, index)=>(
<BoxProdutos
 key={index}
 ImgSrc={bebida[index] || ""}
 DescricaoProduto={bebidas.nome}
 PrecoProduto={bebidas.descricao}
 />
  ))}
   

</DivProdutos>



</>


    )
}


export default Bebidas;