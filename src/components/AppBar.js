import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <main>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                {isLoggedIn ? (
                  <LinkContainer to="contacts">
                    <Nav.Link>Contacts</Nav.Link>
                  </LinkContainer>
                ) : (
                  <>
                    <LinkContainer to="register">
                      <Nav.Link>Registration</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    )
                  </>
                )}
              </Nav>
              {isLoggedIn && (
                <>
                  <Card bg="dark" text="light">
                    <Card.Text>Hello, {name} </Card.Text>
                  </Card>
                  <Button
                    className="ml-2"
                    variant="outline-danger"
                    onClick={handleClick}
                  >
                    LogOut
                  </Button>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </main>
  );
}
