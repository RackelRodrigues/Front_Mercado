import styled from "styled-components";

const Titulopeca = styled.p`
font-family: 'Lato', sem serifa;
 font-weight: 400;
 font-size: 15px;
 color: #000000;

`;
    
const DivIten = styled.div`
width: 370px;
display: flex;
justify-content: space-between;

margin-left: 38px;
position: absolute;
top: 85%;


`;






const Itens2 = ({QuantidadePeca, TituloPreço}) =>{
  return(
  <>
  <DivIten>
  <Titulopeca>{TituloPreço}</Titulopeca>
  <Titulopeca>{QuantidadePeca}</Titulopeca>
  </DivIten>
  
  
  </>

  )
}


export default Itens2;