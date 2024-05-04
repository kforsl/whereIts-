import React from 'react'
import { StyledTicketCardContainer } from './styles/TicketCardContainer.styled'

// Swiper 
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components 
import TicketCard from './TicketCard';

export default function TicketCardContainer({ orderItem }) {
    return (
        <StyledTicketCardContainer>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {
                    orderItem.map((item) => {
                        return <SwiperSlide key={item.ticketNmbr}><TicketCard orderItem={item} /> </SwiperSlide>
                    })
                }
            </Swiper >
        </StyledTicketCardContainer>
    )
}
