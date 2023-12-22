import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';

const MyFooter = () => {
    return (
        <Container className="text-secondary">
            <Row className="mb-3">
                <Col>
                    <BiLogoFacebookCircle className="me-2" />
                    <BiLogoInstagram className="me-2" />
                    <BiLogoTwitter className="me-2" />
                    <BiLogoYoutube />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col xs={12} className="mb-2">
                            <a href="" className="nav-link">Audio And Subtitles</a>
                        </Col>
                        <Col xs={12} className="mb-2">
                            <a href="" className="nav-link">Media Center</a>
                        </Col>
                        <Col xs={12} className="mb-2">
                            <a href="" className="nav-link">Privacy</a>
                        </Col>
                        <Col xs={12} className="mb-2">
                            <a href="" className="nav-link">Contact Us</a>
                        </Col>
                        <Col xs={12} className="mb-2">
                            <Button variant="outline-secondary">Service Code</Button>
                        </Col>
                        <Col xs={12} className="mb-2">
                            <address><small>&copy; 1997-2019 Netflix, inc. {`{i-0d564dfede}`}</small></address>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Audio Description</a>
                    </Col>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Investor Relation</a>
                    </Col>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Legal Notice</a>
                    </Col>
                </Col>
                <Col md={3}>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Help Center</a>
                    </Col>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Jobs</a>
                    </Col>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Cookie Preferences</a>
                    </Col>
                </Col>
                <Col md={3}>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Gift Cards</a>
                    </Col>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Terms of Use</a>
                    </Col>
                    <Col xs={12} className="mb-2">
                        <a href="" className="nav-link">Corporate Information</a>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default MyFooter;