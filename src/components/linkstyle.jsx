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


