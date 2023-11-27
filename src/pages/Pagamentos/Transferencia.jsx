import Styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AccountData from '../../components/AccountData'
import { Navigate, useNavigate } from "react-router";
import { useLocation } from "react-router";


const ImgTransfer = Styled.img`
width: 40%;


`;

const ConteinerLogoT = Styled.div`
background-color: #fff;
width: 700px;
display: flex; 
justify-content: center;
align-items: center;
`;

const QrCodeImage1 = Styled.img`
  width: 400px;
  height: 400px;
  position: relative;
  top: 20px;
  left: -90px;
  
`;



const ButtonTransfer = Styled.button`
width: 200px;
height: 50px;
background-color:#1D4ED8;
color: #000;
position: relative;
top: -280px;
right: -230px;
`;


const StyledT = Styled.p`
color: #000;
font-size: 25;
`;
const Transferencia =()=>{

    const [loadingg, setLoadingg] = useState(true);
    const [erro, setErro] = useState(null);
    const [qrCodeImageUrl, setQrCodeImageUrl] = useState('');
  
    const fetchQrCode = async () => {
      try {
        setLoadingg(true);
        const response = await axios.get('http://127.0.0.1:5000/api/get_qr_Transfer', {
          responseType: 'arraybuffer',
          withCredentials: true,
          
        });
        console.log(qrCodeImageUrl);
        const imageUrl = URL.createObjectURL(new Blob([response.data], { type: 'image/jpg' }));
        setQrCodeImageUrl(imageUrl);
        console.log(qrCodeImageUrl);
      } catch (error) {
        setErro('Error fetching QR Code');
      } finally {
        setLoadingg(false);
      }
    };
    const [qrCodeDataa, setQrCodeDataa] = useState(null);
  
    const handleScan = (data) => {
      if (data) {
        console.log('QR Code lido:', data);
        setQrCodeDataa(data);
      }
    };
  
    useEffect(() => {
      fetchQrCode();
    }, []);
  
    // Use useEffect to observe changes in qrCodeImageUrl
    useEffect(() => {
      console.log('QR Code Image URL:', qrCodeImageUrl);
    }, [qrCodeImageUrl]);
  
  const navigate = useNavigate();
  
    const handleClick = () => {
      
      console.log('Ação antes de navegar');
      navigate("/screenwait");
   
    };

   

  

    return(
<>

      {loadingg && <StyledT>Loading...</StyledT>}
      {erro && <StyledT>{erro}</StyledT>}


  {!loadingg && !erro && (
    <>

<ConteinerLogoT>
<ImgTransfer src="https://i.ibb.co/16W7WMx/image.png" alt="Logo transferencia"/>
</ConteinerLogoT>


<QrCodeImage1 src={qrCodeImageUrl} alt="QR Code"/>

<AccountData/>

<ButtonTransfer onClick={handleClick}>Transferido</ButtonTransfer>



     </>
  )}

</>
    )
}

export default Transferencia;