import Styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AccountData from '../../components/AccountData'
import { Navigate, useNavigate } from "react-router";

const ImgPix = Styled.img`
width: 40%;




`;

const ConteinerLogo = Styled.div`
background-color: #fff;
width: 700px;
display: flex; 
justify-content: center;
align-items: center;
`;

const QrCodeImage = Styled.img`
  width: 400px;
  height: 400px;
  position: relative;
  top: 20px;
  left: -90px;
  
`;


const ButtonPix = Styled.button`
width: 200px;
height: 50px;
background-color:#1D4ED8;
color: #000;
position: relative;
top: -280px;
right: -230px;
`;

const StyledP = Styled.p`
color: #000;
font-size: 25;
`;


const Pix =()=>{
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState('');

  const fetchQrCode = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://127.0.0.1:5000/api/get_qr_code', {
        responseType: 'arraybuffer',
        withCredentials: true,
        
      });
      console.log(qrCodeImageUrl);
      const imageUrl = URL.createObjectURL(new Blob([response.data], { type: 'image/jpg' }));
      setQrCodeImageUrl(imageUrl);
      console.log(qrCodeImageUrl);
    } catch (error) {
      setError('Error fetching QR Code');
    } finally {
      setLoading(false);
    }
  };
  const [qrCodeData, setQrCodeData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      console.log('QR Code lido:', data);
      setQrCodeData(data);
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
    // Aqui você pode realizar ações antes de navegar para outra tela
    console.log('Ação antes de navegar');
    navigate("/screenwait");
    // Navega para a rota desejada
    
  };
    return(
      <>
      {loading && <StyledP>Loading...</StyledP>}
      {error && <StyledP>{error}</StyledP>}

      {!loading && !error && (
        <>
          <ConteinerLogo>
            <ImgPix src="https://i.ibb.co/xqyMnFV/pix.png" alt="Logo Pix" />
          </ConteinerLogo>
  
          <QrCodeImage src={qrCodeImageUrl} alt="QR Code" />

          <AccountData/>



          <ButtonPix onClick={handleClick}>Pago</ButtonPix>

          
        </>
      )}
      </>

    )
}

export default Pix;