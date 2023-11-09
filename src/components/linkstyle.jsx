import styled from "styled-components";


export const Linkstyle = styled.a`
 font-family: 'Lato', sem serifa;
 font-weight: 200;
 font-size: 17px;
 color: #000000;
 text-decoration: none;
 display: flex;


 &:hover{
  color: #000000;
 }

`;

export const BlueSpan = styled.span`
  color: #1D4ED8;
  margin-left: 0.3rem;
  font-family: 'Lato', sem serifa;
  font-weight: 200;
  font-size: 17px;
`;



export const ContainerIncreva = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
 
 `;


export const Divisao = styled.span`
color:#222;
font-weight: 400;
position: relative;
top: 50%;
left: 40%;
transform: translate(-50%, -50%);



&::before {
    content: '';
    position: absolute;
    height: 2px;
    width:250px;
    background-color: #222;
    bottom: 35%;
    right: 135px;
  }

  &::after{
    content: '';
    position: absolute;
    height: 2px;
    width:250px;
    background-color: #222;
    bottom: 35%;
    left: 135px;
  }

`;


export const DivisaoContainer = styled.div`
  margin-bottom: 50px; 

`;

export const LinkCarrinho = styled.a`
 font-family: 'Lato', sem serifa;
 font-weight: 200;
 font-size: 17px;
 color: #3B9EFF;
 text-decoration: none;
position: relative;
top:-23px;
right: -26px;

 &:hover{
  color: #3B9EFF;
 }

>:nth-child(1){
display: flex;
justify-content: center;
align-items: center;

}

`;


export const DivisaoCarrinho = styled.span`
color:rgba(123, 123, 123, 0.44);
font-weight: 400;

position: absolute;
  top: 18%;
  left: -5%;




  &::after{
    content: '';
    position: absolute;
    height: 2px;
    width: 900px;
    background-color: rgba(123, 123, 123, 0.44);
    bottom: 35%;
    left: 135px;
  }

`;


export const DivisaoPontochave = styled.span`
color:rgba(123, 123, 123, 0.44);
font-weight: 400;
position: absolute;
  top: 7%;
  left: -25%;




  &::after{
    content: '';
    position: absolute;
    height: 2px;
    width: 400px;
    background-color: rgba(123, 123, 123, 0.44);
    bottom: 35%;
    left: 135px;
  }

`;


export const DivisaoPontochave2 = styled.span`
color:rgba(123, 123, 123, 0.44);
font-weight: 400;
position: absolute;
top: 90%;
left: -25%;




  &::after{
    content: '';
    position: absolute;
    height: 2px;
    width: 400px;
    background-color: rgba(123, 123, 123, 0.44);
    bottom: 35%;
    left: 135px;
  }

`;