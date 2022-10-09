import React, { Component } from 'react'
import { OrderModel, OrderStatus } from '../model/Order-model'
import { Order } from './order'
import { ApiCaller } from '../api/ApiCaller'

interface state {
  orders: OrderModel[]
}

export class OrderTab extends Component<{}, state> {
  constructor (props: any) {
    super(props)
    this.state = {
      orders: [] as OrderModel[]
    }
  }

  componentDidMount (): void {
    const fetchData = async (): Promise<void> => {
      const filter = {
        status: [OrderStatus.NEW, OrderStatus.PARTIALLY_FILLED]
      }
      const orders = await ApiCaller.getOrderFromDb(filter)
      this.setState({ orders })
    }
    fetchData().catch(console.error)
  }

  render (): JSX.Element {
    const { orders } = this.state
    return (<div>
            <h1>Your active orders</h1>
            {orders.map(order => <Order key={order._id} order={order}/>)}
        </div>)
  }
}
