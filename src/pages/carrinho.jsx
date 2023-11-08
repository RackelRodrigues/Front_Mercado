import { LinkCarrinho, DivisaoCarrinho, DivisaoPontochave, DivisaoPontochave2  } from "../components/linkstyle";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { TitleCarrinho, TitlePontoChave, TitlesMetodo } from "../components/titles";
import Styled from 'styled-components';
import Carrinho from '../images/carrinho.png';
import { Carrinhoimg } from "../components/logo";
import {PontoChave, MetodosCarrinho} from "../components/Boxcarrinho";
import Boxcarrinho from "../components/Boxcarrinho";
import Itens from "../components/itens";


const BoxAlinhamento = Styled.div`
position: relative;
margin-top: 300px;
left: -30%;
width: 864px;
`;

const DivTitle = Styled.div`
background-color: #fff;
margin: 30px;
display: block;

`;


const Divcontinue = Styled.div`
display: flex;
justify-content: flex-start;
align-items: center;



`;


const MeuCarrinho = ()=>{
    return(

    <>
  
<DivTitle>
    <Carrinhoimg src={Carrinho}/>
    <TitleCarrinho>Carrinho</TitleCarrinho>
</DivTitle>

<DivisaoCarrinho></DivisaoCarrinho>

<BoxAlinhamento>
<Boxcarrinho
SrcFoto="https://i.ibb.co/wBqCNmb/produto1arroz.jpg"
TituloProduto="Arroz Pop parbolizado"
Preco="R$7,00"
TotalProduto="R$50,00"

/>

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
TotalProduto="R$50,00"
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
QuantidadePecas="4"
/>

<TitlesMetodo>Metodo de Pagamento</TitlesMetodo>

<MetodosCarrinho>
</MetodosCarrinho>

<DivisaoPontochave2/>

 <Itens 
 TituloPreço="SubTotal:"
 QuantidadePecas="R$35,00"
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