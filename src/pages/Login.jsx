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
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import{Form} from '../components/links'
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { MoverArrow } from '../components/linkstyle';





const Login = () =>{
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');



  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(email)
    console.log(senha)
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setsenha(value);
    }
  };

//para a pag de home
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !senha) { 
        console.log("Email e senha são obrigatórios")
        return;
    
    }
  
    console.log('Dados a serem enviados:', email, senha);
  
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/login`, {
        params: { email, senha },
      });
  
      console.log('Resposta da API:', response);
  
      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);
        navigate('/BoxProdutos', { state: { email: email } });
        navigate('/Boxcarrinho', { state: { email: email } });
        navigate('/Home');
      } else {
        console.error('Resposta do servidor não foi bem-sucedida:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error.message);
    }
  };
  return(
<>
<MoverArrow>
<Link to ="/Home">
<AiOutlineArrowLeft size={40} color="#1D4ED8"/>
</Link>
</MoverArrow>
<ContainerLogin>
<Logo>

<LogoImage src={Caipira} alt='logo do mercadinho'/>

</Logo>

    
    <TitleH3>Endereço e-mail</TitleH3>


    <Form onSubmit={handleSubmit}>
    <DivInput>
    
    <Inputstyle 
    type='email' 
    name='email'
    placeholder='Digite seu Email'
    value={email}
    onChange={handleChange}
    />
    <BsPerson size={30} color="#000000"/>
    </DivInput>

   
   <TitleH3>Senha</TitleH3>

   <DivInput>
    <Inputstyle 
    type='password' 
    placeholder='Digite sua senha'
    name='senha'
    value={senha}
    onChange={handleChange}
    />
    <BiLockAlt size={30} color="#000000"/>

   </DivInput>
  </Form >

   <Divconteiner>
    <Containercheckbok>
   <Checkbok type='checkbox'/>
   <LabelStyle>Lembrar de mim</LabelStyle>
  </Containercheckbok>
   
<Linkstyle href="#">Esqueci a<BlueSpan>senha</BlueSpan></Linkstyle>
</Divconteiner>

<ContainerButton>
<Buttonsend onClick={handleSubmit}>Entrar</Buttonsend>
</ContainerButton>

<ContainerIncreva>
<Link to="/Create account"><Linkstyle >Não tem uma conta?<BlueSpan>Inscreva-se</BlueSpan></Linkstyle></Link>
</ContainerIncreva>
 </ContainerLogin>



</>



)




}

export default Login;