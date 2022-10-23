import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlanModel } from '../../model/PlanModel'
import { allPlans, fetchPlans, planSelected, selectPlanAndFetchOrder } from '../../features/Plan/PlanSlice'

export function PlanSelector(): JSX.Element {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlans() as any)
    }, [])

    const handleChange = (event: React.SyntheticEvent<HTMLSelectElement>): void => {
        const target = event.target as HTMLSelectElement
        dispatch(selectPlanAndFetchOrder(target.value) as any)
    }
    const selectedPlan: PlanModel | null = useSelector(planSelected)
    const plans: PlanModel[] = useSelector(allPlans)
    return (
        <div>
            <h1>Select Your plan</h1>
            <label>
                plan:&nbsp;
                <select value={selectedPlan?._id} onChange={handleChange}>
                    {selectedPlan === null && <option value="">No plan selected</option>}
                    {plans.map((plan) => (
                        <option key={plan._id} value={plan._id}>
                            {`${plan.pair.token1} / ${plan.pair.token2} on ${plan.platform}`}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}
