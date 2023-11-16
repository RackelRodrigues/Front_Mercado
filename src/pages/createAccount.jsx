import { TitleH2 } from '../components/titles';
import { DivInput, Divconteinerstyle } from '../components/divInput';
import { Inputstyle } from '../components/Inputstyle';
import {LinkA, DivApi, Form} from '../components/links'
import { Buttonsend, ContainerButton, ButtonLogin} from '../components/buttonstyle';
import { BsTelephone, BsPerson, } from "react-icons/bs";
import {Header} from '../components/HeaderStyle';
import {Divisao, DivisaoContainer} from '../components/linkstyle';
import { ImgUser } from '../components/logo';
import { BiLockOpenAlt, BiLockAlt} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import axios from 'axios';
import {Link, useNavigate}  from 'react-router-dom';
import { GrHomeRounded } from "react-icons/gr";
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import  {  GoogleOAuthProvider, GoogleLogin   }from '@react-oauth/google' ;




const CreateAccount = () =>{
  const [formEnviado, setFormEnviado] = useState(false);
  const [user, setUser] = useState({nome:'', email:'',cpf:'', telefone:'',senha:''})
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, [name]: value };
      console.log('User:', updatedUser);
      return updatedUser;
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const responseUser = await axios.post('http://127.0.0.1:5000/add/user', JSON.stringify(user),{
           headers:{
             'Content-Type': 'application/json'
           },
           withCredentials: true, 
        });


        navigate('/Address', { state: { user: user } });
       
      // Imprimir as respostas (opcional)
      console.log('Response User:', responseUser.data);

     
    } catch (error) {
      console.error('Erro na requisição:', error.message);
    }
  };
//para a pag de address
const navigate = useNavigate();

const handleButtonClick = () => {
  // Lógica do clique do botão, envio do formulário, etc.

  navigate('/Address', { state: { user: user } });
};
  

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
    
<ImgUser
src='https://i.ibb.co/hXLbPJW/Design-sem-nome-2.jpg'
/>

<TitleH2>Create your Account</TitleH2>

<DivApi>
<GoogleOAuthProvider clientId ="634127394492-gg2eah5se7ncabtnaovb4hpies130b8j.apps.googleusercontent.com">
    <GoogleLogin 
      onSuccess={credentialResponse => { 
        const decoded = jwtDecode(credentialResponse.credential);
        console.log(decoded);
        setUser((prevUser) => ({
          ...prevUser,
          nome: decoded.name, // Adapte conforme necessário
          email: decoded.email, // Adapte conforme necessário
          // Outras informações do usuário...
        }));
      }} 
      onError={() => { 
        console.log('Falha no login');
      }} 
    />
  </GoogleOAuthProvider>

</DivApi>
<DivisaoContainer>
<Divisao>ou use seu email</Divisao>
</DivisaoContainer>

<Form onSubmit={handleSubmit}>
<Divconteinerstyle>
<DivInput>
<Inputstyle type='text' placeholder='Nome Completo' name="nome"
 value={user.nome} onChange={handleChange}
/>
<BsPerson size={30} color="#000000"/>
</DivInput>


<DivInput>
<Inputstyle type='text' placeholder='Digite seu CPF no formato: xxx.xxx.xxx-xx'  name="cpf"
 value={user.cpf}  onChange={handleChange}
/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Numero de telefone'  name="telefone"
 value={user.telefone} onChange={handleChange}
/>
<BsTelephone size={30} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Digite seu Enderenço e-mail'  name="email"
 value={user.email} onChange={handleChange}
/>
<AiOutlineMail size={30} color='#000000'/>
</DivInput>
<DivInput>
<Inputstyle type='text' placeholder='Digite sua melhor senha' 
/>
<BiLockOpenAlt size={30} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Confirme sua senha' name='senha'

value={user.senha} onChange={handleChange}
/>
<BiLockAlt size={30} color='#000000'/>
</DivInput>
</Divconteinerstyle>


<ContainerButton>
<Buttonsend type="submit">continue</Buttonsend>
</ContainerButton>

</Form>
    </>
)
}

export default CreateAccount;