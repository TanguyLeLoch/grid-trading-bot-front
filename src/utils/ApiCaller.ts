import { OrderModel } from '../model/Order-model'

import { Filters } from '../model/Filter'
import { getUrl } from './urlUtils'
import { PlanModel } from '../model/PlanModel'

export const ApiCaller = {
  getOrderFromDb: async (filters: Filters): Promise<OrderModel[]> => {
    const url = getUrl('order') + '/orders?filters=' + JSON.stringify(filters)
    const requestInit = createDefaultRequestInit('GET')
    const response = await fetch(url, requestInit)
    return await response.json()
  },
  getOrderFromCex: async (plan: PlanModel): Promise<OrderModel[]> => {
    const url = getUrl('network') + '/cex/orders'
    const body = {
      platform: plan.platform,
      planId: plan._id,
      pair: plan.pair
    }
    const requestInit = createDefaultRequestInit('POST', body)
    const response = await fetch(url, requestInit)
    return await response.json()
  },
  getPlans: async (): Promise<PlanModel[]> => {
    const url = getUrl('plan') + '/plans/all'
    const requestInit = createDefaultRequestInit('GET')
    const response = await fetch(url, requestInit)
    return await response.json()
  }

}

function createDefaultRequestInit (method: string, body?: object): RequestInit {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      'api-key-middleware': import.meta.env.VITE_API_KEY_BACKEND
    },
    body: JSON.stringify(body)
  }
}
