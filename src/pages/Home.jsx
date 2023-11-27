import { Headerhome } from "../components/HeaderStyle";
import  Styled  from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiSearch} from "react-icons/bi"
import { useState, useEffect} from "react";
import Sidebar from "../components/Sidebar";
import {FiShoppingCart} from "react-icons/fi"
import { ConteinerHome } from "../components/HeaderStyle";
import {BsPersonCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
import{Boxinputheader, InputHeader} from "../components/Inputstyle";
import {Promobox } from "../components/logo"
import { Svg } from "../components/Sidebar";
import Mysliper from '../components/mysliper';
import  Boxpromocao from "../components/boxpromoção";
import axios from 'axios';


const BoxHome = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #fff;
 padding-bottom: 120px;
  margin: 0 auto;
 
`;




export const DivHome = Styled.div`
background-color: #fff;



`;


const Home = () => {

  const apiKey = '79174b714194e424260a290634fd0441';


  const adicionarAoCarrinho = (item) => {
    // Lógica para adicionar ao carrinho, por exemplo, usando o estado
    console.log('Adicionado ao carrinho:', item);
  };
//mostar e fechar sidebar
  const [sidebar, setSidebar] = useState(false);

  const ShowSidebar = () => setSidebar (!sidebar);

  const [promocao, setPromocao] = useState([]);

  const [promocoes, setPromocoes] = useState([]);

  const [busca, setBusca] = useState('');

 

  useEffect(() => {
    const fetchPromocao = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/buscar_promocoes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
         
        });
  
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.statusText}`);
        }
  
        const data = await response.json();
        setPromocoes(data);
      } catch (error) {
        console.error('Erro ao buscar promoções:', error.message);
      }
    };
  
    fetchPromocao();
  }, []);

  

  //para buscar os produtos:

  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('');
//Aqui é para buscar os produtos pelo search
  const handleChange = async (e) => {
    const { value } = e.target;
    setFiltro(value);

    try {
      const response = await axios.get('http://localhost:5000/api/buscar_produto', {
        params: {
          nome: value,
        },
      });

      setFiltro(response.data);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
    }
  };

  

    return(
        <DivHome>
        <Headerhome>
        <GiHamburgerMenu size={30} color="#222" onClick={ShowSidebar}/>
        {sidebar && <Sidebar active={setSidebar}/>}


        <ConteinerHome>
        <Boxinputheader>
         <InputHeader
         type="text"
         value={filtro}
         onChange={handleChange}
         />
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

        
        <Promobox>
      <Mysliper/>
       </Promobox>
  
        <BoxHome>
        
        <BoxHome>
      
       {promocoes.slice(0, 6).map((promocao) => (
       <Boxpromocao
       
      Descricao={promocao.produto_referente}
      Precopromo={promocao.Preco_Antigo}
      Precoreal={promocao.Preco_Atual}
      SrcReal={promocao.urlImagem || ""}
      onAdicionarAoCarrinho={() => adicionarAoCarrinho(promocao)}
    />
  ))}

        </BoxHome>
      

          // Se não houver filtro, renderize os produtos do home
          <>

          </>
        
      </BoxHome>
        </DivHome>
    )
}


 export default Home;