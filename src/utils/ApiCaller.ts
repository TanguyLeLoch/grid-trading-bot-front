import { OrderModel } from '../model/Order-model'

import { Filters } from '../model/Filter'
import { getUrl } from './urlUtils'

export const ApiCaller = {
  getOrderFromDb: async (filters: Filters): Promise<OrderModel[]> => {
    const url = getUrl('order') + '/orders?filters=' + JSON.stringify(filters)
    const requestInit = createDefaultRequestInit('GET')
    const response = await fetch(url, requestInit)
    return await response.json()
  },
  getOrderFromCex: async (): Promise<OrderModel[]> => {
    const url = getUrl('network') + '/cex/orders'
    const body = {
      platform: 'MEXC',
      planId: '63411d13c0c543aab528f982',
      pair: {
        token1: 'BTC',
        token2: 'BUSD'
      }
    }
    const requestInit = createDefaultRequestInit('POST', body)
    const response = await fetch(url, requestInit)
    return await response.json()
  }

}

function createDefaultRequestInit (method: string, body?: object): RequestInit {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      'api-key-middleware': 'devapikey'
    },
    body: JSON.stringify(body)
  }
}
