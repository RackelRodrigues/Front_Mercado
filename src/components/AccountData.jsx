//aqui é informções de conta 
import Styled  from "styled-components"
import { CiBank } from "react-icons/ci";
import { FaStore } from "react-icons/fa";




const StyledConteinerData = Styled.div`
width: 500px;
height: 400px;
border-radius: 10px;
box-shadow: -1px 1px 10px 14px rgba(233,236,239,1);
background-color: #fff;
position: relative;
right: -300px;
top: -360px;

`;

const H3Data = Styled.h3`
color: #000;
font-size: 15px;
posiiton: relative;
left: 200px;
display: flex;
margin-top: 40px;
margin-left: 20px;
display: flex;
align-items: center;

& >svg{
 margin-right: 5px;
 
}

`;

const PData = Styled.p`
color: #000;
font-size: 15px;
position: relative;
top: -240px;
right: -300px;
margin-bottom: 50px;

`;

const TitleData = Styled.h2`
color: red;
font-size: 20px;
font-weight: bold; 
position: relative;
left:30%;
padding-top: 25px;


`;
const NameData = Styled.h3`
color: #000;
font-size: 18px;
font-weight: bold;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
position: relative;
left:29%;
margin-top: 10px;
display: flex;
align-items: center;

& >svg{
 margin-right: 5px;
 
}
`;

const AccountData =() =>{
    return(
        <>
        <StyledConteinerData>

        <TitleData>Verifique os Dados!</TitleData>

        <NameData>
        <FaStore size={30}color="#000"/>
        Mercado Caipira
        </NameData>
        

        
        <H3Data>
        <CiBank size={30}color="#000"/>
            CNPJ:
        </H3Data>
        <H3Data><CiBank size={30}color="#000"/>
        instituição:
        </H3Data>
        <H3Data>
        <CiBank size={30}color="#000"/>
        Agência:
        </H3Data>

        <H3Data>
        <CiBank size={30}color="#000"/>
        Conta Corrente
        </H3Data>

        <PData>22.253.526/0001-85</PData>
        
        <PData>Harmony Banking Group</PData>
        
        <PData>6607</PData>
       
        <PData>7655-0</PData>

        </StyledConteinerData>
        
        </>
    )
}

export default AccountData;