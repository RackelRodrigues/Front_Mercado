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

const Organicos = ()=>{
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar (!sidebar)
    const [organico, setOrganico] = useState([]);
    const [organicos, setOrganicos] = useState([]);

    useEffect(() => {
      const fetchOrganicos = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/buscar_organicos', {
            method: 'GET',  // ou qualquer outro método que você precise
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',  // Isso é equivalente a withCredentials: true
          });
    
          const data = await response.json();
          setOrganicos(data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
      fetchOrganicos();
    }, []);


    const fetchCategoriaFotos = async (categoria) => {
      try {
        const response = await fetch(`http://localhost:5000/api/fotos/${categoria}`, organico, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        const data = await response.json();
        console.log('Fotos da categoria:', data);
        setOrganico(data);
        console.log("data",organico);
      } catch (error) {
        console.error('Erro ao buscar fotos da categoria:', error);
      }
    };
  
    useEffect(() => {
      const categoria = 'Organicos';
      fetchCategoriaFotos(categoria);
    }, []);
    console.log(organico)


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
    <ImagemTitulo src="https://i.ibb.co/pWVF00j/organicos.jpg" alt="Logo Organicos"/>
    <TitleCategory>Organicos</TitleCategory>

  </TitleConteiner>





<DivProdutos>

{organicos.slice(0, 3).map((organicos, index)=>(
<BoxProdutos
 key={index}
 ImgSrc={organico[index] || ""}
 DescricaoProduto={organicos.nome}
 PrecoProduto={organicos.descricao}
 />
 ))}
</DivProdutos>










</>


    )
}


export default Organicos;