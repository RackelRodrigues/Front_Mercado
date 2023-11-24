import { LinkCarrinho, DivisaoCarrinho, DivisaoPontochave, DivisaoPontochave2  } from "../components/linkstyle";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { TitleCarrinho, TitlePontoChave, TitlesMetodo , Titlesquantidade, Titlesquantidade2, Titlesquantidade3} from "../components/titles";
import Styled from 'styled-components';
import Carrinho from '../images/carrinho.png';
import { Carrinhoimg } from "../components/logo";
import {PontoChave, MetodosCarrinho} from "../components/Boxcarrinho";
import Boxcarrinho from "../components/Boxcarrinho";
import Itens from "../components/itens";
import CheckbokCarrinho from '../components/checkbok';
import { useState } from "react";
import { Checkbutton } from "../components/buttonstyle";
import Itens2 from '../components/Itens2';
import { useNavigation } from "react-router-dom";


const BoxAlinhamento = Styled.div`
position: relative;
margin-top: 150px;
left: -30%;
width: 864px;

padding-bottom: 250px;
`;

const DivTitle = Styled.div`
background-color: #fff;
margin: 30px;
display: block;

`;
const Divbaixo = Styled.div`
height: 70px;
width: 70px;

`;



const Divcontinue = Styled.div`
position: relative;
right: 200px;

>:nth-child(1){
    display: flex;
    align-items: center;
}

`;





const MeuCarrinho = ()=>{
    
    const [carrinho, setCarrinho] = useState([])
    //para selecionar a opção de pagamento
    const YourComponent = () => {
        const navigation = useNavigation();
        const [selectedOption, setSelectedOption] = useState(null);
      
        const handleCheckboxChange = (option) => {
          console.log("Option selected:", option);
          setSelectedOption(option);
      
          if (option === 'Pagar em Dinheiro') {
            navigation.navigate('Home');
          }
          // Navegar para a página de Login quando "Cartão de Crédito" for selecionado
          else if (option === 'Cartão de Crédito') {
            navigation.navigate('Login'); // Substitua 'Login' pelo nome correto da sua página de login
          }
          else if (option === 'Pix'){
            navigation.navigate('animais');
          }
          else if (option === 'Cartão de Credito'){
            navigation.navigate('saude');
          }
        };
      };

    //calcular a quantidade de itens do carrinho
    
    return(
    <>
  
<DivTitle>
    <Carrinhoimg src={Carrinho}/>
    <TitleCarrinho>Carrinho</TitleCarrinho>
</DivTitle>

<DivisaoCarrinho></DivisaoCarrinho>


<Titlesquantidade>Produtos</Titlesquantidade>

<Titlesquantidade2>Quantidade</Titlesquantidade2>

<Titlesquantidade3>Valor</Titlesquantidade3>

<BoxAlinhamento>
 
<Boxcarrinho
SrcFoto="https://i.ibb.co/d4NL4G1/combo.jpg"
TituloProduto="combo caixas de chocolate"
Preco="R$11,50"
TotalProduto="R$11,50"
/>

<Boxcarrinho
SrcFoto="https://i.ibb.co/f2Vx6by/pacote-de-feij-o.jpg"
TituloProduto="Feijão carioca Carmil"
Preco="R$11,50"
TotalProduto="R$50,00"
/>

</BoxAlinhamento>


<PontoChave>
<TitlePontoChave> Ponto Chave do Pedido</TitlePontoChave>
<DivisaoPontochave/>


<Itens
TituloPreço="Itens"
QuantidadePecas="3"
/>

<TitlesMetodo>Metodo de Pagamento</TitlesMetodo>

<MetodosCarrinho>
<CheckbokCarrinho
 NomeCarrinho='Pagar em Dinheiro'
 Imgpagamento="https://i.ibb.co/Hd8PfbM/image.png"
 checked={selectedOption === 'Pagar em Dinheiro'}
 onChange={() => handleCheckboxChange('Pagar em Dinheiro')}
/>

<CheckbokCarrinho
 NomeCarrinho="Pix"
 Imgpagamento="https://i.ibb.co/xqyMnFV/pix.png"
 checked={selectedOption === 'Pix'}
 onChange={() => handleCheckboxChange('Pix')}
/>
<CheckbokCarrinho
 NomeCarrinho="transferencia Bancária"
 Imgpagamento="https://i.ibb.co/TPy3Tv0/transferencia.jpg"
 checked={selectedOption === 'Transferencia Bancaria'}
 onChange={() => handleCheckboxChange('Transferencia Bancaria')}

/>
<CheckbokCarrinho
 NomeCarrinho="Cartão de Credito"
 Imgpagamento="https://i.ibb.co/rHPJSCL/cart-o.jpg"

 checked={selectedOption === 'Cartão de Credito'}
 onChange={() => handleCheckboxChange('Cartão de Credito')}
/>

<Checkbutton>Checkout</Checkbutton>
</MetodosCarrinho>

<DivisaoPontochave2/>

<Divbaixo/>


 <Itens2 
 TituloPreço="SubTotal:"
 QuantidadePeca="R$35,00"
 />

</PontoChave>

  <Divcontinue>

    <AiOutlineArrowLeft size={20} color="#3B9EFF"/>
    <Link to="/Home"><LinkCarrinho> Continue Comprando</LinkCarrinho></Link>
    
</Divcontinue>
   </>



    );
}


export default MeuCarrinho;