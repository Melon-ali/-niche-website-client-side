import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col sm={8}>
                        <img
                            className="d-block w-100"
                            src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxmegalayout/extracontent/xhDJFGQ0922nesyK.jpg"
                            alt="First slide"
                        />
                        </Col>
                        <Col sm={4}>
                            <div className="right-side">
                                <h6>REAL ISTATE</h6>
                                <h1>Choose <br /> home of <br /> your dream</h1>
                                <p>We're reimagining how you buy,sell and rent. It's now easier to get into a place you love.So let's do this, together.</p>
                                <button className="btn">Explore</button>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={8}>
                        <img
                            className="d-block w-100"
                            src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxmegalayout/extracontent/YTZ5SImNTJEOSZxg.jpg"
                            alt="First slide"
                        />
                        </Col>
                        <Col sm={4}>
                            <div className="right-side">
                                <h6>HURRY UP!</h6>
                                <h1>You need <br /> to do when <br /> buying a home </h1>
                                <p>Enjoy a refreshing time amidst the monumental Appalachian mountains in a townhouse.</p>
                                <button className="btn">Explore</button>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={8}>
                        <img
                            className="d-block w-100"
                            src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxmegalayout/extracontent/3XDPXuAGIdE8Y2uH.jpg"
                            alt="First slide"
                        />
                        </Col>
                        <Col sm={4}>
                            <div className="right-side">
                                <h6>10 THINGS</h6>
                                <h1>Choose <br /> home of <br /> your dream</h1>
                                <p>We're reimagining how you buy,sell and rent. It's now easier to get into a place you love.So let's do this, together.</p>
                                <button className="btn">Explore</button>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item> 
            </Carousel>
        </>
    );
};

export default Banner;