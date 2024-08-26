import React from 'react'
import { useCartStore } from '../store'

// Components 
import { Container } from '../components/styles/Container.styled'
import PageIndicator from '../components/PageIndicator'
import TicketCardContainer from '../components/TicketCardContainer'
import Fade from '../components/Fade'
import ErrorMsg from '../components/ErrorMsg'

export default function TicketPage() {

    const order = useCartStore((state) => state.order)

    return (
        <>
            <Fade />
            <Container style={{ display: 'block' }}>
                {order.length > 0 ?
                    <>
                        {
                            order.map((orderItem, index) => {
                                return <TicketCardContainer key={index} orderItem={orderItem} />
                            })
                        }
                    </>
                    :
                    <ErrorMsg value={'Tyvärr du har inga köpta biljetter'} />
                }
                 <PageIndicator />
            </Container>
           
        </>
    )
}