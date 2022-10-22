import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #282c34;
    color: white;
    padding: 0 20px;
    height: 50px;
`

export function Navbar (): JSX.Element {
  return (
        <StyledNavbar>
            <span>
                <Link to="/">Home</Link>
            </span>
            <span>
                <Link to="/dashboard">Dashboard</Link>
            </span>
        </StyledNavbar>
  )
}
