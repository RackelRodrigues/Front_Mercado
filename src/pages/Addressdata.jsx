import { TitleH2 } from '../components/titles';
import { DivInput, Divconteinerstyle, Divtermos } from '../components/divInput';
import { Inputstyle } from '../components/Inputstyle';
import {LinkA, Form} from '../components/links'
import { Buttonsend, ContainerButton, ButtonLogin} from '../components/buttonstyle';
import { GrHomeRounded } from "react-icons/gr";
import {Header} from '../components/HeaderStyle';
import {Divisao, DivisaoContainer, BlueSpan} from '../components/linkstyle';
import { Checkbok} from '../components/checkbok';
import {LabelStyle2} from '../components/labelstyle';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ImgUser } from '../components/logo';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Styled from 'styled-components';


const MessageErr = Styled.h4`
color: red;
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;


const Addressdata =()=>{
    const [address, setAddress] = useState({rua: '', bairro: '', numero: '', cep:'', complemento:'', usuario_nome:''}) 
  
    const handleChange2 = (e) => {
      const { name, value } = e.target;
      const updatedValue = name === 'numero' ? parseInt(value, 10) : value;
      setAddress((prevAddress) => {
        const updatedAddress = { ...prevAddress, [name]: value };
        console.log('Address:', updatedAddress);
        return updatedAddress;
      });
    };
  
    
    const navigate = useNavigate();
    
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!address.rua.trim()||!address.bairro.trim()||!address.numero.trim()||!address.cep.trim()||!address.complemento.trim() || !address.usuario_nome.trim()) {
        setErrorMessage("Preencha todos os campos !!");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
        return;
      }
  
      try {
       
  
        const responseAddress = await axios.post('http://127.0.0.1:5000/add/address', address,{
            headers:{
              "Content-Type":'application/json'
            },
            withCredentials: true,
        });

        navigate('/Home');
         
        // Imprimir as respostas (opcional)
        console.log('Response Address:', responseAddress.data);
      } catch (error) {
        console.error('Erro na requisição:', error.message);
      }
    };
    
    const location = useLocation();
    const user = location.state ? location.state.user : null;

    useEffect(() => {
      // Verifica se há dados do usuário no estado da localização
      if (location.state && location.state.user) {
        // Atualiza o estado do endereço com o nome do usuário
        setAddress((prevAddress) => ({
          ...prevAddress,
          usuario_nome: location.state.user.nome
        }));
      }
    }, [location.state]);


    return(
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
     src='https://i.ibb.co/SdjQjxV/Design-sem-nome-3.jpg'
      />


<TitleH2>Address</TitleH2>

{errorMessage && < MessageErr style={{ color: "red" }}>{errorMessage}</MessageErr>}

<Form onSubmit={handleSubmit}>
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
<Inputstyle type='text' placeholder='Complemento'  name="complemento"

value={address.complemento} onChange={handleChange2}
/>
<GrHomeRounded size={25} color='#000000'/>
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



export default Addressdata;