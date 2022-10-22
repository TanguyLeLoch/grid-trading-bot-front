import React from 'react'
import { useSelector } from 'react-redux'
import { planSelected } from './PlanSlice'

export function PlanTab (): JSX.Element {
  const plan = useSelector(planSelected)

  return (<div>
        <h1>Your plan</h1>
        <div>
            {plan?._id}
        </div>
    </div>)
}
