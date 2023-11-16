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





const Login = () =>{
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      // Lógica para lidar com a resposta do servidor
      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);
      } else {
        console.error('Resposta do servidor não foi bem-sucedida:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error.message);
    }
  };

  return(
<>

<ContainerLogin>
<Logo>
<Link to="/Home">
<LogoImage src={Caipira} alt='logo do mercadinho'/>
</Link>
</Logo>


    <TitleH3>Endereço e-mail</TitleH3>

    <DivInput>
    <Inputstyle 
    type='username' 
    name='username'
    placeholder='Digite seu Email'
    value={loginData.username}
    onChange={handleChange}
    />
    <BsPerson size={30} color="#000000"/>
    </DivInput>

   
   <TitleH3>Senha</TitleH3>

   <DivInput>
    <Inputstyle 
    type='password' 
    placeholder='Digite sua senha'
    name='password'
    value={loginData.password}
    onChange={handleChange}
    />
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