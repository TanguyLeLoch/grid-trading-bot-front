import { OrderModel } from '../model/Order-model'

import { Filters } from '../model/Filter'
import { getUrl } from './urlUtils'

export const ApiCaller = {
  getOrderFromDb: async (filters: Filters): Promise<OrderModel[]> => {
    const url = getUrl('order') + '/orders?filters=' + JSON.stringify(filters)
    const requestInit = ApiCaller.createDefaultRequestInit()
    const response = await fetch(url, requestInit)
    return await response.json()
  },

  createDefaultRequestInit: (): RequestInit => {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key-middleware': 'devapikey'
      }
    }
  }
}
