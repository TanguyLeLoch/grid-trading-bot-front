import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allPlans, fetchPlans, planSelected, selectPlan } from './PlanSlice'
import styled from 'styled-components'

const StyledPlanItem = styled.li<{ isSelected: boolean }>`
    color: #f00;
    cursor: pointer;
    border: 1px solid #fff;
    padding: 5px;
    ${({ isSelected }) => isSelected && 'color: #0f0; font-weight: bold;'}
    `

export function PlanSelector (): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlans() as any)
  }, [])

  const plans = useSelector(allPlans)
  const actualPlan = useSelector(planSelected)
  console.log(plans)
  return (<div>
            <h1>Select the plan</h1>
            <button
                onClick={() => dispatch(fetchPlans() as any)}
            >
                refresh
            </button>
            <ul>
                {plans.map(plan => (
                    <StyledPlanItem
                        onClick={() => dispatch(selectPlan(plan._id))} key={plan._id}
                        isSelected={plan._id === actualPlan?._id}
                    >
                        {plan.pair.token1} / {plan.pair.token2} on {plan.platform}
                    </StyledPlanItem>)
                )}
            </ul>
        </div>
  )
}
