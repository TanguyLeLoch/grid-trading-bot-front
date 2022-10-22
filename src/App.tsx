import './App.css'
import React from 'react'
import { OrderDbTab } from './features/orderDb/OrderDbTab'
import { OrderCexTab } from './features/orderCex/OrderCexTab'
import styled from 'styled-components'
import { PlanSelector } from './features/Plan/PlanSelector'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

function App (): JSX.Element {
  return (
        <StyledDiv>
            <PlanSelector/>
            <OrderDbTab/>
            <OrderCexTab/>
        </StyledDiv>
  )
}

export default App
