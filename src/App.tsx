import './App.css'
import { OrderTab } from './components/order-tab'
import React from 'react'
import { Counter } from './features/counter/Counter'

function App (): JSX.Element {
  return (
        <div>
            <Counter/>
            <OrderTab/>
        </div>
  )
}

export default App
