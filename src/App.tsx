import './App.css'
import React from 'react'
import { Counter } from './features/counter/Counter'
import { OrderDbTab } from './features/orderDb/OrderDbTab'
import { OrderCexTab } from './features/orderCex/OrderCexTab'

function App (): JSX.Element {
  return (
        <div>
            <Counter/>
            <OrderDbTab/>
            <hr/>
            <OrderCexTab/>
        </div>
  )
}

export default App
