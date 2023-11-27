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


const Saude = ()=>{
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar (!sidebar)
    const [saudes, setSaudes] = useState([]);
    const [saude, setSaude] = useState([]);

    useEffect(() => {
      const fetchSaude = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/Saude/produtos', {
            method: 'GET',  // ou qualquer outro método que você precise
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',  // Isso é equivalente a withCredentials: true
          });
    
          const data = await response.json();
          setSaude(data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
      fetchSaude();
    }, []);

    const fetchCategoriaFotos = async (categoria) => {
      try {
        const response = await fetch(`http://localhost:5000/api/fotos/${categoria}`, saudes, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        const data = await response.json();
        setSaudes(data);
        console.log('Fotos da categoria:', data);
        console.log("data",saudes);
      } catch (error) {
        console.error('Erro ao buscar fotos da categoria:', error);
      }
    };
  
    useEffect(() => {
      const categoria = 'Saude';
      fetchCategoriaFotos(categoria);
    }, []);
    console.log(saudes)

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
    <ImagemTitulo src="https://i.ibb.co/cD9vzzb/Saude.jpg" alt="Logo saude"/>
    <TitleCategory>Saúde</TitleCategory>
  </TitleConteiner>




<DivProdutos>


{saude.slice(0, 3).map((saude)=>(
<BoxProdutos

 ImgSrc={saude.urlImagem || ""}
 DescricaoProduto={saude.nome_produto}
 PrecoProduto={saude.valor}
 />
 ))}
  
</DivProdutos>


</>


    )
}


export default Saude;