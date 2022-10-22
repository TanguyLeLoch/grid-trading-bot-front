import { useSelector } from 'react-redux'
import { planSelected } from '../../features/Plan/PlanSlice'
import React from 'react'
import { PlanModel } from '../../model/PlanModel'
import { OrderModel } from '../../model/Order-model'
import { selectOrdersCex } from '../../features/orderCex/orderCexSlice'
import { selectOrdersDb } from '../../features/orderDb/orderDbSlice'
import { StepLevel } from './StepLevel'
import styled from 'styled-components'

const StyledTab = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-auto-rows: 50px;
`

export function DashBoard (): JSX.Element {
  const selectedPlan: PlanModel | null = useSelector(planSelected)
  const ordersDb: OrderModel[] = useSelector(selectOrdersDb)
  const ordersCex: OrderModel[] = useSelector(selectOrdersCex)
  if (selectedPlan === null) {
    return <h1>select a plan</h1>
  }
  return (
        <div>
            <h1>Dashboard</h1>
            <StyledTab>
                {selectedPlan.stepLevels.map((stepLevel, index) => (
                    <StepLevel
                        key={stepLevel}
                        position={index}
                        stepLevel={stepLevel}
                        orderDb={getOrderAtStepLevel(ordersDb, stepLevel)}
                        orderCex={getOrderAtStepLevel(ordersCex, stepLevel)}
                    />
                ))}
            </StyledTab>
        </div>
  )
}

function getOrderAtStepLevel (
  orders: OrderModel[],
  stepLevel: number
): OrderModel | null {
  const order: OrderModel | undefined = orders.find(
    (order) => order.price.value === stepLevel
  )
  if (order !== undefined) {
    return order
  }
  return null
}
