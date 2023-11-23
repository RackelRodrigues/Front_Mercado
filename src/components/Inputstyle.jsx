import styled from "styled-components";


export const Inputstyle = styled.input`
  width: 100%;
  background: transparent;
  display: flex;
  outline: none;
  border: none;
  margin: 0;
  color: #000000;

  &::placeholder {
    color: rgba(124, 122, 133, 0.70);
   }
  
`;
export const BoxInputcarrinho = styled.div`
width: 30px;
height: 20px;
color: #000;
background-color:#fff;
border-radius: 8px;
position: relative;
top: 30%;
right: 10%;
font-size: medium;



`;


export const Inputcarrinho = styled.input`
width: 30px;
height: 20px;
color: #000;
background-color:#fff;
border-radius: 3px;
position: relative;
top: -78%;
right: -58%;
font-size: medium;


&:focus {
outline: 2px solid #fff; 
}
`;

export const Boxinputheader = styled.div`
width: 350px;
height: 35px;
background-color: rgba(218, 218, 218, 0.60);
display: flex;
outline: none;
border: none;
border-radius: 10px;
margin-right: 25px;



justify-content: center;
align-items: center;

& >svg{
margin-right: 5px;
}

`;


export const InputHeader = styled.input`
width: 100%;
background-color: transparent;
display: flex;
outline: none;
border: none;
color: #000000;
padding-left: 10px;

`;

