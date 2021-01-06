import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar
      style={{ backgroundColor: '#868a8f' }}
      expand='lg'
      variant='dark'
      collapseOnSelect
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Space-X</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <LinkContainer
              to='/ships'
              className='nav-link text-capitalize ml-sm-5'
            >
              <Nav.Link>Ships</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to='/rockets'
              className='nav-link text-capitalize ml-sm-5 '
            >
              <Nav.Link>Rockets</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to='/launches'
              className='nav-link text-capitalize ml-sm-5 '
            >
              <Nav.Link>Launches</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
