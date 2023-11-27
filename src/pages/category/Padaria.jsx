
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




const Padaria= ()=>{
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar (!sidebar)
    
    const [padarias, setPadarias] = useState([])
    const [padaria, setPadaria] = useState([]);

    useEffect(() => {
      const fetchPadaria = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/Padaria/produtos', {
            method: 'GET',  // ou qualquer outro método que você precise
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',  // Isso é equivalente a withCredentials: true
          });
    
          const data = await response.json();
          setPadaria(data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
      fetchPadaria();
    }, []);


    const fetchCategoriaFotos = async (categoria) => {
      try {
        const response = await fetch(`http://localhost:5000/api/fotos/${categoria}`, padarias, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        const data = await response.json();
        setPadarias(data);
        console.log('Fotos da categoria:', data);
        
        console.log("data",padarias);
      } catch (error) {
        console.error('Erro ao buscar fotos da categoria:', error);
      }
    };
  
    useEffect(() => {
      const categoria = 'Padaria';
      fetchCategoriaFotos(categoria);
    }, []);
    console.log(padarias)

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
   <ImagemTitulo src="https://i.ibb.co/4t57DS6/padaria.jpg" alt="LogoPadaria"/>
   <TitleCategory>Padaria</TitleCategory>
  </TitleConteiner>


<DivProdutos>




{padaria.slice(0, 3).map((padaria, index)=>(
<BoxProdutos
 key={index}
 ImgSrc={padaria.urlImagem || ""}
 DescricaoProduto={padaria.nome_produto}
 PrecoProduto={padaria.valor}
 />
 ))}
  
</DivProdutos>





</>


    )
}


export default Padaria;