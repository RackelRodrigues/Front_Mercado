import { TitleH2 } from './components/titles';
import { DivInput, Divconteinerstyle } from './components/divInput';
import { Inputstyle } from './components/Inputstyle';
import {LinkA, ApiConteiner, DivApi} from './components/links'
import { Buttonsend, ContainerButton, ButtonLogin} from './components/buttonstyle';
import { BsTelephone, BsPerson, } from "react-icons/bs";
import { BiLockOpenAlt, BiLockAlt, BiLogoFacebookSquare} from "react-icons/bi";
import {AiOutlineMail, AiFillLinkedin} from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import {FcGoogle} from "react-icons/fc";
import {Header} from './components/HeaderStyle';


import './App.css'



function App() {
return (
  <div>
<Header>
<LinkA href="#">
<GrHomeRounded size={30} color='#000000'/>
</LinkA>
<ButtonLogin >Login</ButtonLogin>
</Header>



<TitleH2>Create your Account</TitleH2>

<DivApi>

<LinkA href='#'><BiLogoFacebookSquare size={35} color='#3b5998'/></LinkA>

<LinkA href='#'><FcGoogle size={35} /></LinkA>

<LinkA href=''><AiFillLinkedin size={35} color='#0e76a8'/></LinkA>

</DivApi>


<Divconteinerstyle>
<DivInput>
<Inputstyle type='text' placeholder='Nome Completo'/>
<BsPerson size={30} color="#000000"/>
</DivInput>


<DivInput>
<Inputstyle type='text' placeholder='Digite seu CPF no formato: xxx.xxx.xxx-xx'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Numero de telefone'/>
<BsTelephone size={30} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Digite seu Enderenço e-mail'/>
<AiOutlineMail size={30} color='#000000'/>
</DivInput>
</Divconteinerstyle>



<TitleH2>Address</TitleH2>

<Divconteinerstyle>
<DivInput>
<Inputstyle type='text' placeholder='Rua'/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Bairro'/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Cep'/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Digite sua melhor senha'/>
<BiLockOpenAlt size={30} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Confirme sua senha'/>
<BiLockAlt size={30} color='#000000'/>
</DivInput>

</Divconteinerstyle>

<ContainerButton>
<Buttonsend>Criar Conta</Buttonsend>
</ContainerButton>


 </div>
  )
}

export default App
