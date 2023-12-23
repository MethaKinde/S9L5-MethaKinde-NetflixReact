import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const SearchedMovies = ({ searchQuery }) => {
    const [movies, setMovies] = useState([])

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

    return(
        <Container fluid>
            <Row>
            {movies.map((movie) => (
                    <Col md={2} key={movie.imdbID}>
                        <div className='movie mb-5'>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className='img-fluid'
                            />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default SearchedMovies;