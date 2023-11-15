import styled from "styled-components";
import {ButtonAdicione} from './buttonstyle';





const ImgProdutos = styled.img`
width: 180px;
background-color: #fff;
position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DescricaoProdutos = styled.p`
font-weight: bold;
font-family: 'Lato', sem serifa;
font-size: 20px;
color: #000;
background-color: #fff;
display: flex;
justify-content: center;

`;

const PrecoProdutos = styled.p`
font-weight: 400;
font-family: 'Lato', sem serifa;
font-size: 20px;
font-style: normal;
color: #000;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`;
const ConteinerProdutos = styled.div`
width: 250px;
height: 250px;
background-color: #ffff;
margin-top: 150px;
cursor: pointer;
max-width: 300px;
margin-bottom: 30px;


`;

export const DivProdutos = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
height: 100%;


`;

const BoxProdutos = ({ImgSrc, DescricaoProduto, PrecoProduto}) =>{
    return(
    <>
    <ConteinerProdutos>
    <ImgProdutos src={ImgSrc} alt="fotos produtos"/>
    <DescricaoProdutos>{DescricaoProduto}</DescricaoProdutos>
    <PrecoProdutos>{PrecoProduto}</PrecoProdutos>
    <ButtonAdicione >Adcione ao Carrinho</ButtonAdicione>
    </ConteinerProdutos>
    
    
    </>

    )
}


export default BoxProdutos;