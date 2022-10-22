import { OrderModel, Side } from '../../model/Order-model'
import styled from 'styled-components'
import React from 'react'
import { Pair } from '../../model/Pair'

const StyledOrder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
`
const StyledPrice = styled.span`
    color: white;
    font-weight: bold;
    font-size: 26px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StyledPair = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
`
const StyledSide = styled.span`
${(props: { side: Side }) => props.side === Side.BUY ? 'color: green' : 'color: red'}
    
`

export function Order ({ order }: { order: OrderModel }): JSX.Element {
  return <StyledOrder>
        <PairElement pair={order.pair}></PairElement>
        {order.price.value !== undefined && <StyledPrice>{order.price.value}</StyledPrice>}
        <StyledSide side={order.side}>
            {order.side}
        </StyledSide>
    </StyledOrder>
}

function PairElement ({ pair }: { pair: Pair }): JSX.Element {
  return <StyledPair>
        <span style={
            {
              color: 'green',
              fontWeight: 'bold',
              alignSelf: 'flex-start'
            }
        }> {pair.token1}</span>
        <span style={
            {
              color: 'red',
              fontSize: 'small',
              alignSelf: 'flex-end'
            }
        }> {pair.token2}</span>
    </StyledPair>
}
