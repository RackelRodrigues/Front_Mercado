import { ImagemTitulo } from '../../components/logo';
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
import { useState, useEffect} from "react";


const Animais = () =>{
    

  const [Animal, setAnimal] = useState([])
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



  const fetchCategoriaFotos = async (categoria) => {
    try {
      const response = await fetch(`http://localhost:5000/api/fotos/${categoria}`, Animal, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      console.log('Fotos da categoria:', data);
      setAnimal(data);
      console.log("data",Animal);
    } catch (error) {
      console.error('Erro ao buscar fotos da categoria:', error);
    }
  };

  // Exemplo de como chamar a função para buscar fotos de uma categoria específica
  useEffect(() => {
    const categoria = 'Animais';
    fetchCategoriaFotos(categoria);
  }, []);
  console.log(Animal)

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
{animais.slice(0, 3).map((animais, index)=>(
<BoxProdutos
 key={index}
 ImgSrc={Animal[index] || ""}
 DescricaoProduto={animais.nome}
 PrecoProduto={animais.descricao}
 />
  ))}

</DivProdutos>

</>

    )
}



export default Animais;