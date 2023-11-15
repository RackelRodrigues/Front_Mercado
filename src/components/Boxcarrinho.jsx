import Styled from "styled-components"
import { Removebutton } from "./buttonstyle";
import { ProdutoCarrinhoimg } from "./logo";
import { Titleprecocarrinho, TitleTotalcarrinho, Produto1} from "./titles";
import { useState } from "react";


export const MetodosCarrinho = Styled.div`
width: 448px;
margin-top: 40px;

`;


export const PontoChave = Styled.div`
width: 448px;
height: 700px;
border-radius: 5px;
background-color: rgba(237, 238, 240, 0.80);
position: absolute;
top: 0%;
left: 68%;
margin-top: 180px;

`;


export const BoxProdutosCarrinho= Styled.div`
width: 864px;
height: 152px;
border-radius: 15px;
background-color: #EDEEF0;
margin: 20px;

`;

export const MetodoPag = Styled.div`

`;

const Boxcarrinho =({SrcFoto, Preco, TotalProduto, TituloProduto})=>{

    const [carrinho, setCarrinho] = useState([])


    const removerDoCarrinho = (index) => {
        const novoCarrinho = [...carrinho];
        novoCarrinho.splice(index, 1);
        setCarrinho(novoCarrinho);
        console.log(carrinho)
      };
    return (
        <>
        <BoxProdutosCarrinho>
         <ProdutoCarrinhoimg src={SrcFoto} alt="Produto"/>
         <Produto1>{TituloProduto}</Produto1>
         <Removebutton onClick={removerDoCarrinho}>Remove</Removebutton>
         <Titleprecocarrinho>{Preco}</Titleprecocarrinho>
         <TitleTotalcarrinho >{TotalProduto}</TitleTotalcarrinho>

        </BoxProdutosCarrinho>
        
        
        
        </>
    )
}


export default Boxcarrinho;