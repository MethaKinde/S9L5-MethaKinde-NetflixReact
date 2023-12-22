import Container from "react-bootstrap/Container";
import { Row, Col, Button, Dropdown } from "react-bootstrap";
import './GenresSelection.css';


const GenresSelection = () => {
    return (
        <Container fluid className="d-flex justify-content-between mx-5 mb-4" id="selezioneGenere">
            <div className="d-flex" id="parteSx">
                <h2 className="fw-bold me-5">TV Shows</h2>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                        Genres
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Anime</Dropdown.Item>
                        <Dropdown.Item href="#">Comedy</Dropdown.Item>
                        <Dropdown.Item href="#">Drama</Dropdown.Item>
                        <Dropdown.Item href="#">Thriller</Dropdown.Item>
                        <Dropdown.Item href="#">Romance</Dropdown.Item>
                        <Dropdown.Item href="#">Horror</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="btn-group">
                <Button variant="outline-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
                    </svg>
                </Button>
                <Button variant="outline-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"></path>
                    </svg>
                </Button>
            </div>
        </Container>
    )
}

export default GenresSelection;