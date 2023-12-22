import React, { useEffect, useState, useRef } from 'react';
import Container from "react-bootstrap/Container";
import { Col, Button, Carousel } from "react-bootstrap";
import './TrendingNow.css';

const TrendingNow = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const itemsRef = useRef(null)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const items = itemsRef.current;

        if (items) {
            items.forEach((e) => {
                const slide = 6;
                let next = e.nextElementSibling;

                for (let i = 0; i < slide; i++) {
                    if (!next) {
                        next = items[0];
                    }

                    let cloneChild = next.cloneNode(true);
                    e.appendChild(cloneChild.children[0]);
                    next = next.nextElementSibling;
                }
            });
        }

        const fetchData = async () => {
            const apiKey = '8453cc11';
            const searchQuery = 'harry potter';
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

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex)
    }

    return (
        <Container fluid className="ms-5 mb-4 genere" id="TrendingNow">
            <h3 className="fw-bold">Trending Now</h3>
            <Carousel
                id="carouselTrending"
                controls={false}
                activeIndex={activeIndex} // Passa l'indice attivo
                ref={(ref) => (itemsRef.current = document.querySelectorAll('.carousel .carousel-item'))}
            >
                {movies.map((movie) => (
                    <Carousel.Item key={movie.imdbID}>
                        <Col md={2}>
                            <div className='movie'>
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className='img-fluid'
                                />
                            </div>
                        </Col>
                    </Carousel.Item>
                ))}
                {/* <Carousel.Item>
                    <Col md={2}>
                        <div className="movie">
                            <img src="" alt="American Factory" className="img-fluid" />
                        </div>
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <Col md={2}>
                        <div className="movie">
                            <img src="./assets/media/media4.jpg" alt="img4" className="img-fluid" />
                        </div>
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <Col md={2}>
                        <div className="movie">
                            <img src="./assets/media/media6.jpg" alt="img6" className="img-fluid" />
                        </div>
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <Col md={2}>
                        <div className="movie">
                            <img src="./assets/media/media9.jpg" alt="img9" className="img-fluid" />
                        </div>
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <Col md={2}>
                        <div className="movie">
                            <img src="./assets/media/media10.jpg" alt="img10" className="img-fluid" />
                        </div>
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <Col md={2}>
                        <div className="movie">
                            <img src="./assets/media/media11.jpg" alt="img11" className="img-fluid" />
                        </div>
                    </Col>
                </Carousel.Item> */}
                {/* Pulsanti precedente e successivo */}
                <Button
                    className="carousel-control-prev"
                    variant="light"
                    role="button"
                    onClick={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? itemsRef.current.length - 1 : prevIndex - 1))}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </Button>
                <Button
                    className="carousel-control-next"
                    variant="light"
                    role="button"
                    onClick={() => setActiveIndex((prevIndex) => (prevIndex === itemsRef.current.length - 1 ? 0 : prevIndex + 1))}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </Button>
            </Carousel>
        </Container>
    )
}

export default TrendingNow;