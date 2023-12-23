import React, { useEffect, useState, useRef } from 'react';
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CommentArea from './CommentArea';
import './TrendingNow.css';

const TrendingNow = ({ searchQuery }) => {
    const itemsRef = useRef(null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (movie) => {
        setSelectedMovie(movie);
        setShow(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = '8453cc11';
            const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data);

                if (data.Search) {
                    setMovies(data.Search);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchQuery]);

    return (
        <Container fluid className="ms-5 mb-4 genere" id="TrendingNow">
            <h3 className="fw-bold">{searchQuery} Movies</h3>
            <Row
                className="d-flex flex-nowrap"
                id="carouselTrending"
                controls={false}
                ref={(ref) => (itemsRef.current = document.querySelectorAll('.movie'))}
            >
                {movies.map((movie) => (
                    <Col md={2} key={movie.imdbID}>
                        <div className='movie' onClick={() => handleShow(movie)}>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className='img-fluid movie-cover'
                                style={{ height: '100%', width: 'auto' }}
                            />
                        </div>
                    </Col>
                ))}
            </Row>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMovie && selectedMovie.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    {selectedMovie && (
                        <img
                            src={selectedMovie.Poster}
                            alt={selectedMovie.Title}
                            className='img-fluid mb-3'
                            style={{ height: '100%', width: 'auto' }}
                        />
                    )}
                    <CommentArea asin={selectedMovie && selectedMovie.imdbID}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default TrendingNow;
