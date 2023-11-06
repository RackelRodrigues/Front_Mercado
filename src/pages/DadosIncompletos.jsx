import Styled from "styled-components";
import {Inputstyle} from "../components/Inputstyle";
import { DivInput, ConteinerInputsDados } from "../components/divInput";
import { TitleH1, Titlepdados} from "../components/titles";
import { ImgProduto } from "../components/boxpromoção";
import { ContinueAtencao } from "../components/buttonstyle";
import { GrHomeRounded } from "react-icons/gr";
import { BiLockAlt} from "react-icons/bi";
import {AiOutlineArrowRight} from 'react-icons/ai';




const ConteinerDados = Styled.div`
width: 800px;
height: 800px;
background-color: rgba(237, 238, 240, 0.80);
border-radius: 15px;
margin: 30px

`;

const Divimg = Styled.div`

display: flex;
justify-content: center;
align-items: center;

`;

const Imgdados = Styled.img`
max-width: 100%;
width: 450px;
display:flex;
align-items: center;

`;

const ButtonDiv = Styled.div`
  position: absolute;
  top: 105%;
  left: 65%;
  transform: translate(-50%, -50%);
`;




const DadosIncompletos = () =>{
    return(
        <>

        <ConteinerDados>
           
        <Divimg>
        <Imgdados src="https://i.ibb.co/z6BN98H/alert-rubber-stamp-vector-12324062-fotor-bg-remover-20231104182329.png"/>
        </Divimg>
        
        <TitleH1>Dados Incompletos</TitleH1>
       <Titlepdados>Complete sua inscrição</Titlepdados>
        
        <ConteinerInputsDados>
        <DivInput>
        <Inputstyle type='text' placeholder='Rua'  name="rua"
        />
        <GrHomeRounded size={25} color='#000000'/>
        </DivInput>

        <DivInput>
       <Inputstyle  type='text' placeholder='Bairro'  name="bairro"
       />
        <GrHomeRounded size={25} color='#000000'/>
        </DivInput>

       <DivInput>
        <Inputstyle type='text' placeholder='Numero'  name="numero"
        />
         <GrHomeRounded size={25} color='#000000'/>
       </DivInput>

       <DivInput>
        <Inputstyle type='text' placeholder='Cep'  name="cep"

         />
          <GrHomeRounded size={25} color='#000000'/>
       </DivInput>

       <DivInput>
        <Inputstyle type='text' placeholder='Digite sua senha' name='confirme'
         />
        <BiLockAlt size={30} color='#000000'/>
       </DivInput>

       </ConteinerInputsDados>
       <ButtonDiv>
       <ContinueAtencao>Continue
      <AiOutlineArrowRight size={20} color='#fff'/>
       </ContinueAtencao>
       </ButtonDiv>
       </ConteinerDados>
       
       
        </>
    )
}


export default DadosIncompletos;