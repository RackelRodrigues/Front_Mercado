
import Styled from "styled-components";
import { FaHouse } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router";

const TituloH3 = Styled.h3`
color: #000;
font-size: 30px;
font-weight: bold;
position: relative;
margin-top: 10px;
right: -150px;
font-family: 'Lato', sem serifa;
 
&>svg{
margin-right: 10px;
}
`;

const ConteinerConcluido =Styled.div`
margin-top: 50px;
width: 700px;
height: 700px;
border-radius: 10px;



`;

const Conteinerinfo = Styled.div`

width: 700px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
`;


const Subtitulo = Styled.p`
color: #000;
font-size: 20px;
margin-bottom: 15px;
margin-top: 15px;
font-family: 'Lato', sem serifa;
 font-weight: 100;



`;


const ButtomHome = Styled.button`
width: 200px;
height: 50px;
background-color: #1D4ED8;
position: relative;
top: -100px;
right: -260px;

&>svg{
margin-right: 10px;

}


`;
const Imgconcluido =Styled.img`
width: 100px;
height: 100px;
position: relative;
right: -300px;

`;



const ImgPerson = Styled.img`
width:300px;
height: 300px;
position: relative;
top: -250px;
right: -500px;
`;


const Concluido =()=>{


    const navigate = useNavigate();

    const handleTela = () => {
  
    navigate("/Home");
    // Navega para a rota desejada
    
  };
    return(
     <>
     <ConteinerConcluido>
        <Imgconcluido src="https://i.ibb.co/TMVXqrH/Design-sem-nome-removebg-preview.png" alt/>
     <TituloH3>
     Compra realizada com sucesso
     </TituloH3>
     <Conteinerinfo>
      <Subtitulo>Agradecemos por escolher nossos produtos.</Subtitulo>
      <Subtitulo>Seu pedido está sendo preparado com carinho no Mercadinho Caipira!</Subtitulo>
      <Subtitulo>Em breve será enviado</Subtitulo>
      <Subtitulo>Ass. Mercadinho Caipira</Subtitulo>
     </Conteinerinfo>
     <ImgPerson src="https://i.ibb.co/6Pk8Sxr/Design-sem-nome.png" alt="person"/>
     </ConteinerConcluido>
     
     <ButtomHome onClick={handleTela}>
     <FaHouse size={15} color="#fff"/>
      Home
    </ButtomHome>
     </>

    )
}

export default Concluido;