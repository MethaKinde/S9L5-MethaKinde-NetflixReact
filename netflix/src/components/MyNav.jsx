import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSearch, BiSolidBell } from 'react-icons/bi';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SearchedMovies from './SearchedMovies';
import './MyNav.css'

const MyNav = () => {
    //lo state per il modale della search
    const [show, setShow] = useState(false)
    const [input, setInput] = useState("")
    const [searchedMoviesVisible, setSearchedMoviesVisible] = useState(false)

    const handleSearch = () => {
        setSearchedMoviesVisible(true)
    }

    return (
        <Navbar expand="lg" className="mx-5 mb-4" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="./assets/netflix_logo.png" alt="logo" className="img-fluid" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link href="#" aria-current="page">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#">
                            TV Shows
                        </Nav.Link>
                        <Nav.Link href="#">
                            Movies
                        </Nav.Link>
                        <Nav.Link href="#">
                            Recently Added
                        </Nav.Link>
                        <Nav.Link href="#">
                            My list
                        </Nav.Link>
                    </Nav>
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="search-icon me-3 icone">
                            <BiSearch onClick={() => setShow(true)} />
                        </div>
                        <Nav.Link href="#" className="me-3">
                            KIDS
                        </Nav.Link>
                        <div className="bell-icon me-3 icone">
                            <BiSolidBell />
                        </div>
                        <NavDropdown title={<img src="./assets/avatar.png" alt="avatar" className="img-fluid" />} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Navbar.Collapse>
            </Container>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w modal-80h"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Titoli, personaggi, genere..
                        <div className='input-wrapper'>
                            <input
                                placeholder='Scrivi qua...'
                                value={input}
                                onChange={(e) => { setInput(e.target.value) }}
                            />
                            <Button onClick={handleSearch}>Cerca</Button>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {searchedMoviesVisible && <SearchedMovies searchQuery={input} />}
                </Modal.Body>
            </Modal>
        </Navbar>
    )
}

export default MyNav;