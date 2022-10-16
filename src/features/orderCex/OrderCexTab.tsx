import React, { useEffect } from 'react'
import { Order } from '../../components/order'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveOrderCex, selectOrdersCex } from './orderCexSlice'

export function OrderCexTab (): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getActiveOrderCex() as any)
  }, [])

  const orders = useSelector(selectOrdersCex)

  return (<div>
        <h1>Your orders on cex</h1>

        <button
            onClick={() => dispatch(getActiveOrderCex() as any)}
        >
            refresh
        </button>
        {orders.map(order => <Order key={order._id} order={order}/>)}
    </div>)
}
