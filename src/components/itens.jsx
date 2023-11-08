import styled from "styled-components";

const Titulopecas = styled.p`
font-family: 'Lato', sem serifa;
 font-weight: 400;
 font-size: 15px;
 color: #000000;

`;
    
const DivItens = styled.div`
width: 370px;
display: flex;
justify-content: space-between;
margin-top: 15px;
margin-left: 38px;

`;




const Itens = ({QuantidadePecas, TituloPreço}) =>{
  return(
  <>
  <DivItens>
  <Titulopecas>{TituloPreço}</Titulopecas>
  <Titulopecas>{QuantidadePecas}</Titulopecas>
  </DivItens>
  
  
  </>

  )
}


export default Itens;