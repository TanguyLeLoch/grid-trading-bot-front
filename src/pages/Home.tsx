import { PlanSelector } from '../features/Plan/PlanSelector'
import { OrderDbTab } from '../features/orderDb/OrderDbTab'
import { OrderCexTab } from '../features/orderCex/OrderCexTab'
import React from 'react'

export function Home (): JSX.Element {
  return (
        <>
            <PlanSelector/>
            <OrderDbTab/>
            <OrderCexTab/>
        </>
  )
}
