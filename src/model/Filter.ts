import { OrderStatus } from './Order-model'

export interface Filters {
  status: OrderStatus | OrderStatus[]
}
