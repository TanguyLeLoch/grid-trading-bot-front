import './App.css'
import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DashBoard } from './pages/dashboard/DashBoard'
import { Navbar } from './components/Navbar'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

function App (): JSX.Element {
  return (
        <StyledDiv>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="dashboard" element={<DashBoard/>}/>
            </Routes>
        </StyledDiv>
  )
}

export default App
