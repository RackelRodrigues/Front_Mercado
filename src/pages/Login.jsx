import {TitleH3} from '../components/titles';
import {Inputstyle} from '../components/Inputstyle';
import {DivInput, Divconteiner} from '../components/divInput';
import {BsPerson} from "react-icons/bs";
import {Logo, LogoImage} from '../components/logo'
import {BiLockAlt} from "react-icons/bi";
import {ContainerLogin } from '../components/containerLogin';
import {Buttonsend, ContainerButton} from '../components/buttonstyle';
import {LabelStyle} from '../components/labelstyle';
import {Linkstyle, BlueSpan, ContainerIncreva} from '../components/linkstyle';
import Caipira from '../images/Caipira.png';
import {Checkbok, Containercheckbok} from '../components/checkbok'
import {Link} from "react-router-dom";





const Login = () =>{
  return(
<>

<ContainerLogin>
<Logo>
<LogoImage src={Caipira} alt='logo do mercadinho'/>
</Logo>


    <TitleH3>Endereço e-mail</TitleH3>

    <DivInput>
    <Inputstyle type='text' placeholder='Digite seu Usuario'/>
    <BsPerson size={30} color="#000000"/>
    </DivInput>

   
   <TitleH3>Senha</TitleH3>

   <DivInput>
    <Inputstyle type='text' placeholder='Digite sua senha'/>
    <BiLockAlt size={30} color="#000000"/>
   </DivInput>

   <Divconteiner>
    <Containercheckbok>
   <Checkbok type='checkbox'/>
   <LabelStyle>Lembrar de mim</LabelStyle>
  </Containercheckbok>
   
<Linkstyle href="#">Esqueci a<BlueSpan>senha</BlueSpan></Linkstyle>
</Divconteiner>

<ContainerButton>
<Buttonsend>Entrar</Buttonsend>
</ContainerButton>

<ContainerIncreva>
<Link to="/Create account"><Linkstyle >Não tem uma conta?<BlueSpan>Inscreva-se</BlueSpan></Linkstyle></Link>
</ContainerIncreva>
 </ContainerLogin>



</>



)




}

export default Login;