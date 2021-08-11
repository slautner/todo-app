import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/board/todo">Todo</NavLink>
      <NavLink to="/board/doing">Doing</NavLink>
      <NavLink to="/board/done">Done</NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`
