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
  const [loginData, setLoginData] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,

    
    }));
    console.log(loginData);
    console.log(`Campo ${name} alterado para:`, value);
  };

//para a pag de address
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!loginData.email || !loginData.senha) { 
      return (
        <TitleH3>Email e senha são obrigatórios</TitleH3>
      

    );
    }
  
    console.log('Dados a serem enviados:', loginData);
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/login', loginData, {headers:{
        'Content-Type': 'application/json'
      },
      withCredentials: true, 
   });
      
  
      console.log('Resposta da API:', response);
  
      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);
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
    value={loginData.email}
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
    value={loginData.senha}
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