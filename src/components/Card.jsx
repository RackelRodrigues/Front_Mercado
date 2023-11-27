import Styled  from "styled-components";
import { GoNumber } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router";


const StyledConteinerPage = Styled.div`
width: 500px;
height: 500px;
border-radius: 10px;
box-shadow: -1px 1px 10px 14px rgba(233,236,239,1);
background-color: #fff;
display: flex;
justify-content: center;



`;

const StyledConteinerCard = Styled.div`
width: 300px;
height: 200px;
background-color: #0077b6;
border-radius: 5px;
margin-top: 220px;
position: relative;
backface-visibility: hidden;
transform-style: preserve-3d;
transition: 0.3s;
transform: ${props => (props.isCvvFocused ? 'rotateY(180deg)' : 'rotateY(0deg)')};



`;

const StyledWapper = Styled.div`
position: absolute;
transform: translate(-50%, -50%);
top: 50%;
left: 50%;
perspective: 800px;
left: 780px;
top: 130px;
`;

const StyledConteinerCardBack = Styled.div`
width: 300px;
height: 200px;
background-color: #0077b6;
border-radius: 5px;
margin-top: 220px;
top: 0;
left: 0;
transform-style: preserve-3d;
position: absolute; 
backface-visibility: hidden;
opacity: 0;

&.focused {
    backface-visibility: visible;
    opacity: 1;
  }
`;


const StyledChipcard = Styled.img`
width: 40px;
position: relative;
top: 15px;
left: 30px;
`;
const StyledLogoCard1 =Styled.img`
width: 40px;
position: relative;
top: 15px;
left: 200px;
`;


const StyledLogoCard2 =Styled.img`
width: 40px;
position: relative;
left: 258px;
margin-top: 7px;

`;


const StyledCardHolder = Styled.p`
color: #000;
font-size: 15px;
position: relative;
top: 15px;
margin-left: 8px;

`;

const StyledCardName=Styled.p`
color: #000;
font-size: 15px;
position: relative;
top: 17px;
margin-left: 8px;
`;

const StyledExpires = Styled.p`
color: #000;
font-size: 15px;
position: relative;
top: 95px;
left: 220px;
`;

const StyledExpiresDate = Styled.p`
color: #000;
font-size: 15px;
position: relative;
top: 95px;
left: 250px;
`;
const StyledNumberCard = Styled.p`
color: #000;
font-size: 25px;
position: relative;
margin-left: 5px;
`;

const StyledCvv = Styled.p`
color: #000;
position: relative;
top: 30px;
left: 230px;
margin-top:10px;
margin-bottom: 5px;

`;

const StyledCvvNumber = Styled.p`
color: #000;
position: relative;
left: 270px;
margin-top:5px;
margin-bottom: 5px;
`;

const StyledBoxblack= Styled.div`
width: 300px;
height: 40px;
background-color: #000;
position: relative;
top: 10px;

`;

const StyledBoxWhite = Styled.div`
width: 300px;
height: 25px;
background-color: #fff;
`;

const StyledConteinerForm = Styled.div`
width: 700px;
height: 450px;
display: flex;
align-self: end;
background-color: transparent;
flex-direction: column;



`;

const StyledLabelInput = Styled.label`
color: #000;
font-weight: bold;
display: flex;
margin-left: 30px;
margin-top: 5px;
position: relative;
top: 180px;

`;

const StyledInputcard = Styled.input`
width: 100%;
outline: none;
border: none;
background: transparent;
display: flex;
align-items: center;
color: #000;

&::placeholder {
    color: rgba(124, 122, 133, 0.70);
   font-size: 15px;
   }
`;

const StyledBoxinput = Styled.div`
width: 250px;
height: 40px;
background-color: rgba(218, 218, 218, 0.60); 
border-radius: 5px;
display: flex;
align-items: center;
margin-left: 10px;
margin-top: 30px;
position: relative;
top: 160px;
& >svg{
 margin-left: 2px;
}


  
`;


const StyledLabelInput2 = Styled.label`
color: #000;
font-weight: bold;
display: flex;
margin-left: 30px;
margin-top: 5px;
position: relative;
top: -18px;
right: -365px;
`;


const StyledInputvalid = Styled.input`
width: 100%;
outline: none;
border: none;
background: transparent;
display: flex;
align-items: center;
color: #000;
margin-left: 10px;


`;

const StyledboxinputValid = Styled.div`
width: 50px;
height: 30px;
background-color: rgba(218, 218, 218, 0.60); 
border-radius: 5px;
display: flex;
align-items: center;
position: relative;
top: -12px;
right: -400px;
`;


const StyledLabelInput3 = Styled.label`
color: #000;
font-weight: bold;
display: flex;
margin-left: 30px;
margin-top: 5px;
position: relative;
top: 25px;
right: -375px;
`;


const StyledInputCvv = Styled.input`
width: 100%;
outline: none;
border: none;
background: transparent;
display: flex;
align-items: center;
color: #000;
margin-left: 10px;


`;

const StyledboxinputCvv = Styled.div`
width: 50px;
height: 30px;
background-color: rgba(218, 218, 218, 0.60); 
border-radius: 5px;
display: flex;
align-items: center;
position: relative;
top: 30px;
right: -400px;
`;



const ButtonEnviar = Styled.button`
width: 100px;
background-color: #1D4ED8;
color: #000;
display: flex;
align-items: center;
justify-content: center;
position: relative;
top:80px;
right: -200px;

&:hover{
    background-color: #205D9E;

}
`;


const MessageErr = Styled.h4`
color: red;
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;


 const Card = ( ) =>{
 const [Name, setName] = useState("exemplo seu nome")
 const [cardNumber, setCardNumber] = useState("1234 5678 9123 4567");
 const [cvv, setCvv] = useState("202");
 const [valid, setValid] = useState("29/9");
 const [isCvvFocused, setIsCvvFocused] = useState(false);

 const handleCardNumberChange = (event) => {
    console.log(cardNumber);
    setCardNumber(event.target.value);
  };

  const handleCardnamechange = (event) => {
    setName(event.target.value);
    console.log(Name)
  };

  const handleCardValidchange = (event) => {
    setValid(event.target.value);
    console.log(valid)
  };

  const handleCardCvvchange = (event) => {
    setCvv(event.target.value);
    console.log(cvv) 
  };

  const handleCardCvvFocus = () => {
    console.log("Focado no CVV");
    setIsCvvFocused(true);
  };

  const handleCardCvvBlur = () => {
    console.log("Desfocado do CVV");
    setIsCvvFocused(false);
  };
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleEnviarClick = () => {
    if(!Name.trim() || !cardNumber.trim() || !cvv.trim() || !valid.trim()){
      console.log("Preencha todos os campos !!")
      setErrorMessage("Preencha todos os campos !!");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return 
    }
    navigate('/screenwait');
  };


    return(
        <>

{errorMessage && < MessageErr style={{ color: "red" }}>{errorMessage}</MessageErr>}

 <StyledConteinerPage>
 <StyledWapper>
  <StyledConteinerCard isCvvFocused={isCvvFocused}>
  <StyledChipcard src="https://i.ibb.co/xX30KbY/png-transparent-rectangular-brown-and-black-sim-card-illustration-chip-pin-solutions-ltd-emv-payment.png" alt="chip do cartão"/>
  <StyledLogoCard1 src="https://i.ibb.co/6gZZqcK/logo-visa-removebg-preview.png" alt="Logo do cartão"/>
 <StyledExpires>Valid thru</StyledExpires>
 <StyledExpiresDate>{valid}</StyledExpiresDate>
  <StyledNumberCard>{cardNumber}</StyledNumberCard>
  <StyledCardHolder>Nome do titular</StyledCardHolder> 
  <StyledCardName>{Name}</StyledCardName> 
</StyledConteinerCard>

    <StyledConteinerCardBack className={isCvvFocused ? "focused" : ""}>
    <StyledBoxblack/>
    <StyledCvv>CVC</StyledCvv>
    <StyledCvvNumber>{cvv}</StyledCvvNumber>
    <StyledBoxWhite/>
    <StyledLogoCard2 src="https://i.ibb.co/6gZZqcK/logo-visa-removebg-preview.png" alt="Logo do cartão"/>
    </StyledConteinerCardBack>
    </StyledWapper>
<StyledConteinerForm>

 

<StyledLabelInput>Nome do Titular</StyledLabelInput>
<StyledBoxinput>
<IoPersonOutline size={20} color="#000"/>
<StyledInputcard type="text"
value={Name}
onChange={handleCardnamechange}
placeholder="exemplo seu nome"

/>

</StyledBoxinput>

<StyledLabelInput>Numero do cartão</StyledLabelInput>
<StyledBoxinput>
<GoNumber size={20} color="#000"/>
<StyledInputcard type="text"
value={cardNumber}
onChange={handleCardNumberChange}
placeholder="123 456 789 123 456"
/>
</StyledBoxinput>


<StyledLabelInput2>Valid thru</StyledLabelInput2>
<StyledboxinputValid>
<StyledInputvalid
type="text"
value={valid}
onChange={handleCardValidchange}
placeholder="29/9"
/>
</StyledboxinputValid>


<StyledLabelInput3>CVV</StyledLabelInput3>
<StyledboxinputCvv>
<StyledInputCvv
type="text"
value={cvv}
placeholder="202"
onChange={handleCardCvvchange}
onFocus={handleCardCvvFocus}
onBlur={handleCardCvvBlur}
/>
</StyledboxinputCvv>
<ButtonEnviar onClick={handleEnviarClick}>Enviar</ButtonEnviar>
</StyledConteinerForm>
   
</StyledConteinerPage>
  

        </>
    )
}


export default Card;