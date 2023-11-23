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
import BoxProdutos from '../../components/BoxProdutos'
import { DivProdutos } from '../../components/BoxProdutos';

const Congelados = ()=>{

 
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar (!sidebar)
    const [Congelados, setCongelados] = useState([]);
    const [congelado, setcongelado] = useState([]);

    useEffect(() => {
      const fetchcongelados= async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/buscar_congelados', {
            method: 'GET',  // ou qualquer outro método que você precise
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',  // Isso é equivalente a withCredentials: true
          });
    
          const data = await response.json();
          setcongelado(data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      };
      fetchcongelados();
    }, []);



    const fetchCategoriaFotos = async (categoria) => {
      try {
        const response = await fetch(`http://localhost:5000/api/fotos/${categoria}`, Congelados, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        const data = await response.json();
        console.log('Fotos da categoria:', data);
        setCongelados(data);
        console.log("data",Congelados);
      } catch (error) {
        console.error('Erro ao buscar fotos da categoria:', error);
      }
    };
  
    // Exemplo de como chamar a função para buscar fotos de uma categoria específica
    useEffect(() => {
      const categoria = 'Congelado';
      fetchCategoriaFotos(categoria);
    }, []);
    console.log(Congelados)




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
   <ImagemTitulo src="https://i.ibb.co/V22WPMG/congelados.jpg" alt="Congelados"/>
   <TitleCategory>Congelados</TitleCategory>

  </TitleConteiner>

<DivProdutos>
{congelado.slice(0, 3).map((congelado, index)=>(
  <BoxProdutos
key={index}
 ImgSrc={Congelados[index] || ""}
 DescricaoProduto={congelado.nome}
PrecoProduto={congelado.descricao}
 />
))}
 </DivProdutos>
</>


    )
}


export default Congelados;