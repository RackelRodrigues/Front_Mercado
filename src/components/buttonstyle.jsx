import styled from "styled-components";



 export const Buttonsend = styled.button`
  width: 700px;
  height: 50px;
  background-color: #1D4ED8;
  color: #ffffff;
  font-family: 'Lato', sem serifa;
  font-size: 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: #205D9E;

}
 `;

 export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 25px;
  font-family: 'Lato', sem serifa;
  //olhar se deu problema no login por causa do margin-top
 
 `;

export const ButtonLogin = styled.button`
border-radius: 10px;
background: #1D4ED8;
width: 100px;
height: 80px;
margin-right: 15px;
margin-top: 10px;
transition: background-color 0.3s ease;
font-family: 'Lato', sem serifa;


&:hover{
    background-color: #205D9E;

}

`;
 

 export const ButtonAdicione = styled.button`
 width: 200px;
 height: 20px;
 border-radius: 5px;
 background: #1D4ED8;
 transition: background-color 0.3s ease;
 display: flex;
justify-content: center;
align-items: center;
color: #FFF;
font-size: 15px;
margin: auto;



&:hover{
    background-color: #205D9E;

}
 `;