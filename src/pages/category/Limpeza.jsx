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



const Limpeza = ()=>{

    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar (!sidebar)
    const [limpezas, setLimpezas] = useState([])

    const [limpeza, setLimpeza] = useState([]);

    useEffect(() => {
      const fetchlimpeza= async () => {
        try {
          const response = await fetch('http://localhost:5000/api/buscar_limpeza', {
            method: 'GET',  // ou qualquer outro método que você precise
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',  // Isso é equivalente a withCredentials: true
          });
    
          const data = await response.json();
          setLimpeza(data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
      fetchlimpeza();
    }, []);


    const fetchCategoriaFotos = async (categoria) => {
      try {
        const response = await fetch(`http://localhost:5000/api/fotos/${categoria}`, limpezas, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        const data = await response.json();
        console.log('Fotos da categoria:', data);
        setLimpezas(data);
        console.log("data",limpezas);
      } catch (error) {
        console.error('Erro ao buscar fotos da categoria:', error);
      }
    };
  
    useEffect(() => {
      const categoria = 'Limpeza';
      fetchCategoriaFotos(categoria);
    }, []);
    console.log(limpezas)


    
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
    <ImagemTitulo src="https://i.ibb.co/rywvbQD/limpeza-1.jpg" alt="Logo Limpeza"/>
    <TitleCategory>Limpeza</TitleCategory>
  </TitleConteiner>



<DivProdutos>

{limpeza.slice(0, 3).map((limpeza, index)=>(
<BoxProdutos
key={index}
 ImgSrc={limpezas[index]|| ""}
 DescricaoProduto={limpeza.nome}
 PrecoProduto={limpeza.descricao}
 />
 ))}
  
</DivProdutos>








</>


    )
}


export default Limpeza;