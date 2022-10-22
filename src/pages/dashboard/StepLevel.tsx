import React from 'react'
import { OrderModel } from '../../model/Order-model'
import styled from 'styled-components'
import { Order } from './order'
import { StyledPrice } from './styled/price'

const StepLevelValue = styled(StyledPrice)`
    grid-column: 1 / 2;
    ${(props: { position: number }) => `grid-row: ${props.position + 1} / ${props.position + 2};`}
`
const StyledPriceContainer = styled.div`
    position: relative;
    ${(props: { color: string }) => `background-color: ${props.color} `};
`
const StepLevelOrderDb = styled.div`
    grid-column: 2 / 3;
    ${(props: { position: number, color: string }) => `
        grid-row: ${props.position + 1} / ${props.position + 2};
        background-color: ${props.color};
    `}
`

const StepLevelOrderCex = styled.div`
    grid-column: 3 / 4;
    ${(props: { position: number, color: string }) => `
        grid-row: ${props.position + 1} / ${props.position + 2};
        background-color: ${props.color};
    `}
`

interface StepLevelProps {
  stepLevel: number
  orderDb: OrderModel | null
  orderCex: OrderModel | null
  position: number
}

export function StepLevel ({ stepLevel, position, orderDb, orderCex }: StepLevelProps): JSX.Element {
  let color
  if (orderDb !== null && orderCex !== null) {
    color = 'rgba(0,255,0,0.1)'
  } else if (orderDb !== null && orderCex === null) {
    color = 'rgba(255,153,0,0.1)'
  } else if (orderDb === null && orderCex === null) {
    color = 'rgba(0,186,255,0.1)'
  } else {
    color = 'rgba(255,0,0,0.1)'
  }
  console.log('color', color)
  return (
        <>
            <StyledPriceContainer color={color}>
                <StepLevelValue position={position}>{stepLevel}</StepLevelValue>
            </StyledPriceContainer>
            <StepLevelOrderDb color={color} position={position}>
                {orderDb !== null && <Order order={orderDb}/>}
            </StepLevelOrderDb>
            <StepLevelOrderCex color={color} position={position}>
                {orderCex !== null && <Order order={orderCex}/>}
            </StepLevelOrderCex>
        </>
  )
}
