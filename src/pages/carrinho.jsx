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
import Itens2 from '../components/Itens2'


const BoxAlinhamento = Styled.div`
position: relative;
margin-top: 150px;
left: -30%;
width: 864px;

padding-bottom: 100px;
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
    const [selectedOption, setSelectedOption] = useState();
    const handleCheckboxChange = (option) => {
        console.log("Option selected:", option); 
      setSelectedOption(option);
    };

    //calcular a quantidade de itens do carrinho
    const calcularTotalItens = () => {
        return itensCarrinho.reduce((total, item) => total + item.quantidade, 0);
      };
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
SrcFoto="https://i.ibb.co/7KXVdzy/chocolate.jpg"
TituloProduto="Chocolate Lacta diamante negro"
Preco="R$11,50"
TotalProduto="R$5,00"
/>

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
QuantidadePecas={calcularTotalItens()}
/>

<TitlesMetodo>Metodo de Pagamento</TitlesMetodo>

<MetodosCarrinho>
<CheckbokCarrinho
 NomeCarrinho='Boleto bancario'
 Imgpagamento="https://i.ibb.co/VvhyGXM/boleto.jpg"
 checked={selectedOption === 'Boleto bancario'}
 onChange={() => handleCheckboxChange('Boleto bancario')}
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