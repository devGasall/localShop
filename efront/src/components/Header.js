import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>BestShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown
                                title="Admin"
                                id="admin"
                            >
                                <LinkContainer
                                    to="/admin/categories"
                                >
                                    <NavDropdown.Item className="admin-item">
                                        Catégories
                                    </NavDropdown.Item>
                                </LinkContainer>

                            </NavDropdown>
                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i> Connexion</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
