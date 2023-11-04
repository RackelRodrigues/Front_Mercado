import { TitleH2 } from '../components/titles';
import { DivInput, Divconteinerstyle, Divtermos } from '../components/divInput';
import { Inputstyle } from '../components/Inputstyle';
import {LinkA, DivApi, Form} from '../components/links'
import { Buttonsend, ContainerButton, ButtonLogin} from '../components/buttonstyle';
import { BsTelephone, BsPerson, } from "react-icons/bs";
import { BiLockOpenAlt, BiLockAlt, BiLogoFacebookSquare} from "react-icons/bi";
import {AiOutlineMail, AiFillLinkedin} from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import {FcGoogle} from "react-icons/fc";
import {Header} from '../components/HeaderStyle';
import {Divisao, DivisaoContainer, BlueSpan} from '../components/linkstyle';
import { Checkbok} from '../components/checkbok';
import {LabelStyle2} from '../components/labelstyle';
import {Link} from "react-router-dom";
import { useState } from 'react';



const CreateAccount = () =>{

  const [user, setUser] = useState({nome:'', email:'',cpf:'', telefone:'', confirme:'',senha:''})
  const [address, setAddress] = useState({rua: '', bairro: '', numero: '', cep:''}) 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setAddress({ ...adress, [name]: value });
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
        body: JSON.stringify(address),
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
</Divconteinerstyle>



<TitleH2>Address</TitleH2>

<Divconteinerstyle >
<DivInput>
<Inputstyle type='text' placeholder='Rua'  name="rua"
value={address.rua} onChange={handleChange2}
/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Bairro'  name="bairro"
value={address.bairro} onChange={handleChange2}
/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Numero'  name="numero"
value={address.numero} onChange={handleChange2}
/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Cep'  name="cep"

value={address.cep} onChange={handleChange2}
/>
<GrHomeRounded size={25} color='#000000'/>
</DivInput>

<DivInput>
<Inputstyle type='text' placeholder='Digite sua melhor senha' name='confirme'
value={user.confirme} onChange={handleChange}
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

<Divtermos>
<Checkbok type='checkbox'/>
<LabelStyle2>concordo com os termos de <BlueSpan>serviço</BlueSpan> e <BlueSpan>política de privacidade</BlueSpan></LabelStyle2>
</Divtermos>

<ContainerButton>
<Buttonsend type="submit">Criar Conta</Buttonsend>
</ContainerButton>

</Form>
    </>
)
}

export default CreateAccount;