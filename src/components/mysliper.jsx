import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';
import promocao_caipira from '../images/promoção_caipira.png';
import supermercado_caipira from '../images/supermercado_caipira.png';
import {register} from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react';
import { UseState, useEffect } from 'react';

register();

const AnuncioImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;




const Mysliper = () =>{
    
  



    return (

        <slidesConteiner>
            <Swiper 
            slidesPerView={1}
            pagination={{clickable:true}}
            navigation
            
            >
                <SwiperSlide>
                    <AnuncioImg src={promocao_caipira} alt="promoção 1"/>
                </SwiperSlide>

                <SwiperSlide>
                   <AnuncioImg src={supermercado_caipira} alt="promoção 2"/>
                </SwiperSlide>
            </Swiper>
        </slidesConteiner>

    );
};


export default Mysliper;