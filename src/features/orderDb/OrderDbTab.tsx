import React, { useEffect } from 'react'
import { Order } from '../../pages/dashboard/order'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveOrderDb, selectOrdersDb } from './orderDbSlice'

export function OrderDbTab (): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getActiveOrderDb() as any)
  }, [])

  const orders = useSelector(selectOrdersDb)

  return (<div>
        <h1>Your active orders</h1>

        <button
            onClick={() => dispatch(getActiveOrderDb() as any)}
        >
            refresh
        </button>
        {orders.map(order => <Order key={order._id} order={order}/>)}
    </div>)
}
