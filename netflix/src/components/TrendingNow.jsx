import React, { useEffect, useState, useRef } from 'react';
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import './TrendingNow.css';

const TrendingNow = ({searchQuery}) => {
    const itemsRef = useRef(null)
    const [movies, setMovies] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const apiKey = '8453cc11';
            const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data)

                if (data.Search) {
                    setMovies(data.Search);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData()
    }, []);

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
                        <div className='movie'>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className='img-fluid'
                                style={{ height: '100%', width: 'auto' }}
                            />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default TrendingNow;