import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'

export function Header(){
	return (
		<header>
			<Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
					<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Trading Co.</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to='/cart'>
								<Nav.Link><i className='fas fa-shopping-cart'> Cart</i></Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link><i className='fas fa-sign-in-alt'> Login</i></Nav.Link>
							</LinkContainer>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}
