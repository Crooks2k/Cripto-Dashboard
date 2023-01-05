import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link} from 'react-router-dom'
function Header() {

  return (
    <header>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" id="NavBar-nav"> 
          <Container fluid>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="butt-nav"/>
            <Navbar.Offcanvas className="offcanvas-navbar"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" >
              <Offcanvas.Header closeButton id="offcanvas-body-act">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="offcanvas-body-act-e"></Offcanvas.Title>
                
              </Offcanvas.Header>
              <Offcanvas.Body id="offcanvas-body">
                <Nav className="justify-content-center flex-grow-1 pe-3 " id="NavBar-colors">
            {/* link is used to get a SPA - single page aplication (if i use element a page have a reload)*/}
                    <Nav.Link><Link to="/">Criptomonedas</Link></Nav.Link>
                    <Nav.Link><Link to="/components/Noticias/Noticias">Noticias</Link></Nav.Link>
                    <Nav.Link><Link to="/components/Aprender/Aprender">Aprender</Link></Nav.Link>
                    <Nav.Link><Link to="/components/Convertidor/Convertidor">Convertidor</Link></Nav.Link>
                    <Nav.Link><Link to="/components/Informacion/Informacion">Informacion</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> 
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default Header