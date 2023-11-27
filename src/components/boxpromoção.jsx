import  Styled from "styled-components";
import {ButtonAdicione} from './buttonstyle'
import { useState } from "react";



const DescricaoProduto = Styled.p`
font-weight: bold;
font-family: 'Lato', sem serifa;
font-size: 20px;
color: #000;
background-color: #fff;
display: flex;
justify-content: center;
`;


export const ImgProduto = Styled.img`
width: 300px;
background-color: #fff;
display: flex;
justify-content: center;

`;

const Preco = Styled.p`
font-weight: 400;
font-family: 'Lato', sem serifa;
font-size: 20px;
font-style: normal;
color: #E54D2E;
margin-right: 60px;
margin-left: 10px;

`;

const Precopromoçao = Styled.p`
font-weight: 400;
font-family: 'Lato', sem serifa;
font-size: 15px;
font-style: normal;
color: #92909A;
text-decoration: line-through; 
background-color: #fff;
display: flex;
justify-content: center;

`;





const ConteinerProduto = Styled.div`
 width: 300px;
 height: 300px;
 background-color: #ffff;
 margin-top: 150px;
 cursor: pointer;
 max-width: 300px;

 
`;



const Conteinerprecos = Styled.div`
display: flex;
background-color: #ffff;
align-items: center;
position: relative;
right: -120px;

`;

const Boxpromocao = ({Desconto, Descricao, Precopromo, Precoreal, SrcReal}) =>{
    // Adicione a lógica para adicionar ao carrinho
    const [carrinho, setCarrinho] = useState([]);



    const adicionarAoCarrinho = (item) => {
      // Lógica para adicionar ao carrinho
      Desconto
      console.log('Adicionado ao carrinho:', item.Desconto);
    
      // Atualiza o estado do carrinho
      setCarrinho([...carrinho, item.Desconto]);
    };

  return(
  <>
 
    <ConteinerProduto>
    <ImgProduto src={SrcReal}  alt="promoção 1"/>
    <DescricaoProduto>{Descricao}</DescricaoProduto>
    <Precopromoçao>{Precopromo}</Precopromoçao>
    <Conteinerprecos>
    <Preco>{Precoreal}</Preco>
    </Conteinerprecos>
    <ButtonAdicione onClick={() => adicionarAoCarrinho({
    })} >Adicione ao carrinho</ButtonAdicione>
   </ConteinerProduto>
 
</>



    );
}


export default Boxpromocao;