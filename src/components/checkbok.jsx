import styled from "styled-components";
import { useState } from "react";


export const Checkbok = styled.input`
background-color: #000000;
width: 15px;
display: flex;
align-self: center;



`;


export const Containercheckbok = styled.div`
//por motivos de divisão
display: flex;


`;


//chebok redondo
const CheckboxContainer = styled.div`

width: 408px;
height: 69px;
border-radius: 10px;
background-color: #fff;
display: flex;
justify-content: flex-start;
align-items: center;
margin-left:15px;
margin-bottom: 30px;
border: 2px #fff solid;

input[type="radio"]:checked + div {
    background-color: #007bff; /* Cor de fundo quando marcado */
    border-color: #007bff; /* Cor da borda quando marcado */
  }
`;


const CheckbokInput = styled.input`
width: 15px;
height: 15px;
margin-left: 15px;
border: 4px solid black;

`;

const TextLabel = styled.label`
 font-family: 'Lato', sem serifa;
 font-weight: Bold;
 font-size: 20px;
 color: ${(props) => (props.checked ? '#222222' : '#000')};
  margin-left: 20px;
 cursor: pointer;
 
`;

const ImgMetodo = styled.img`
width: 60px;
height: 60px;
margin-left: 30px;
`;

const CheckbokCarrinho = ({NomeCarrinho, Imgpagamento,  checked, onChange})=>{
   
   
    return(
        <>
         <CheckboxContainer>
            <CheckbokInput type="radio" checked={checked} onChange={onChange}/>
            <ImgMetodo src={Imgpagamento}/>
            <TextLabel checked={checked}>{NomeCarrinho}</TextLabel>
         </CheckboxContainer>
         


        </>
    )
}



export default CheckbokCarrinho;