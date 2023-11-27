import Styled from "styled-components"
import { Removebutton } from "./buttonstyle";
import { ProdutoCarrinhoimg } from "./logo";
import { Titleprecocarrinho, TitleTotalcarrinho, Produto1} from "./titles";
import { useState } from "react";
import { BoxInputcarrinho, Inputcarrinho } from "../components/Inputstyle";
import { useLocation } from 'react-router-dom';



export const MetodosCarrinho = Styled.div`
width: 448px;
margin-top: 40px;

`;


export const PontoChave = Styled.div`
width: 448px;
height: 700px;
border-radius: 5px;
background-color: rgba(237, 238, 240, 0.80);
position: absolute;
top: 0%;
left: 68%;
margin-top: 180px;

`;


export const BoxProdutosCarrinho= Styled.div`
width: 864px;
height: 152px;
border-radius: 15px;
background-color: #EDEEF0;
margin: 20px;
`;

const Conteinerpreco = Styled.div`
position: relative;
top: -100%;

`;


export const MetodoPag = Styled.div`

`;

const Boxcarrinho =({SrcFoto, Preco, TotalProduto, TituloProduto})=>{


    const [carrinho, setCarrinho] = useState(1);
    
    const adicionarAoCarrinho = async () => {
        try {
            // Fazer a solicitação para a rota '/api/carrinhoitens'
            const response = await axios.post('/api/carrinhoitens', {
                // Incluir os dados necessários na solicitação
                username: email,
                produto: TituloProduto,
                valor: Preco,
                quantidade: carrinho, 
            });

            // Tratar a resposta, se necessário
            console.log(response.data);
        } catch (error) {
            // Lidar com erros, se houver
            console.error(error);
        }
    };

    const removerDoCarrinho = (index) => {
        const novoCarrinho = [...carrinho];
        novoCarrinho.splice(index, 1);
        setCarrinho(novoCarrinho);
        console.log(carrinho);
    
    console.log(carrinho)
    };

    const location = useLocation();
  const { email } = location.state || {}; 
    return (
        <>
        <BoxProdutosCarrinho>
         <ProdutoCarrinhoimg src={SrcFoto} alt="Produto"/>
         <Produto1>{TituloProduto}</Produto1>
         <Removebutton onClick={removerDoCarrinho}>Remove</Removebutton>
            <Inputcarrinho 
            type="number"
            value={carrinho}
            onChange={(e) => setCarrinho(e.target.value)}
            />
            
         <Titleprecocarrinho>{Preco}</Titleprecocarrinho>
         <TitleTotalcarrinho >{TotalProduto}</TitleTotalcarrinho>
         
        </BoxProdutosCarrinho>
        
        
        
        </>
    )
}


export default Boxcarrinho;