import { TitleH2 } from '../components/titles';
import { DivInput, Divconteinerstyle, Divtermos } from '../components/divInput';
import { Inputstyle } from '../components/Inputstyle';
import {LinkA, DivApi} from '../components/links'
import { Buttonsend, ContainerButton, ButtonLogin} from '../components/buttonstyle';
import { BsTelephone, BsPerson, } from "react-icons/bs";
import { BiLockOpenAlt, BiLockAlt, BiLogoFacebookSquare} from "react-icons/bi";
import {AiOutlineMail, AiFillLinkedin} from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import {FcGoogle} from "react-icons/fc";
import {Header} from '../components/HeaderStyle';
import {Divisao, DivisaoContainer, BlueSpan} from '../components/linkstyle';
import { Checkbok, Containercheckbok } from '../components/checkbok';
import {LabelStyle2} from '../components/labelstyle';
import {Link} from "react-router-dom";
import { useEffect } from 'react';


const CreateAccount = ()=>{
  const [user, setUser] = useState({nome:'', email:'',cpf:'', telefone:'', senha:''})
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




  useEffect(() => {
    fetch("/add/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.User);
      });
  }, []);



 return (
    <>
    <Header>
<Link to="/Home"><LinkA href="#">
<GrHomeRounded size={30} color='#000000'/>
</LinkA>
</Link>
<Link to="/Login">
    <ButtonLogin>Login</ButtonLogin>
</Link>
</Header>



<TitleH2>Create your Account</TitleH2>

<DivApi>

<LinkA href='#'><BiLogoFacebookSquare size={35} color='#3b5998'/></LinkA>

<LinkA href='#'><FcGoogle size={35} /></LinkA>

<LinkA href='#'><AiFillLinkedin size={35} color='#0e76a8'/></LinkA>

</DivApi>
<DivisaoContainer>
<Divisao>ou use seu email</Divisao>
</DivisaoContainer>

<Divconteinerstyle>
<DivInput>
<Inputstyle type='text' placeholder='Nome Completo' name="nome"
 value={formData.nome} onChange={handleChange}
/>
<BsPerson size={30} color="#000000"/>
</DivInput>


<DivInput>
<Inputstyle type='text' placeholder='Digite seu CPF no formato: xxx.xxx.xxx-xx'
 value={formData.cpf}  onChange={handleChange}
/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Numero de telefone'
 value={formData.telefone} onChange={handleChange}
/>
<BsTelephone size={30} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Digite seu Enderenço e-mail'
 value={formData.email} onChange={handleChange}
/>
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
<Inputstyle type='text' placeholder='Numero'/>
<BiLockAlt size={30} color='#000000'/>
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

<Divtermos>
<Checkbok type='checkbox'/>
<LabelStyle2>concordo com os termos de <BlueSpan>serviço</BlueSpan> e <BlueSpan>política de privacidade</BlueSpan></LabelStyle2>
</Divtermos>

<ContainerButton>
<Buttonsend type='submit'>Criar Conta</Buttonsend>
</ContainerButton>


    
    
    </>
 )
}

export default CreateAccount;