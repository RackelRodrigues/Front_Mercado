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
import { useState, useEffect } from 'react';



const CreateAccount = () =>{

  const [user, setUser] = useState({nome:'', email:'',cpf:'', telefone:'', senha:''})
  const [adress, setAdress] = useState({rua: '', bairro: '', numero: '', cep:''}) 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setAdress({ ...adress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/add/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    
    });
  
      fetch('/add/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adress),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
          // Você pode lidar com o erro aqui, como exibir uma mensagem de erro para o usuário.
        });
      
      
      
      

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
    


<TitleH2>Create your Account</TitleH2>

<DivApi>

<Link to="/"><BiLogoFacebookSquare size={35} color='#3b5998'/></Link>

<Link to="/"><FcGoogle size={35} /></Link>

<Link to="/"><AiFillLinkedin size={35} color='#0e76a8'/></Link>

</DivApi>
<DivisaoContainer>
<Divisao>ou use seu email</Divisao>
</DivisaoContainer>

<Divconteinerstyle onSubmit={handleSubmit}>
<DivInput>
<Inputstyle type='text' placeholder='Nome Completo' name="nome"
 value={user.nome} onChange={handleChange}
/>
<BsPerson size={30} color="#000000"/>
</DivInput>


<DivInput>
<Inputstyle type='text' placeholder='Digite seu CPF no formato: xxx.xxx.xxx-xx'
 value={user.cpf}  onChange={handleChange}
/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Numero de telefone'
 value={user.telefone} onChange={handleChange}
/>
<BsTelephone size={30} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Digite seu Enderenço e-mail'
 value={user.email} onChange={handleChange}
/>
<AiOutlineMail size={30} color='#000000'/>
</DivInput>
</Divconteinerstyle>



<TitleH2>Address</TitleH2>

<Divconteinerstyle onSubmit={handleSubmit}>
<DivInput>
<Inputstyle type='text' placeholder='Rua'
value={adress.rua} onChange={handleChange2}
/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Bairro'
value={adress.bairro} onChange={handleChange2}
/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Numero'
value={adress.numero} onChange={handleChange2}
/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Cep'

value={adress.cep} onChange={handleChange2}
/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Digite sua melhor senha'/>
<BiLockOpenAlt size={30} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Confirme sua senha'

value={adress.senha} onChange={handleChange2}
/>
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