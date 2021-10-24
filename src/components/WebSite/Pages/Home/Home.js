import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Specialitites from '../DynamicComponents/Specialities/specialities';
import Search from '../Home/Search';
import FeedBack from './feedback';
import Blog from '../Blog/Blog';
import Three from '../DynamicComponents/Three/Three';
import Appointment from '../Appointments/Appointment/Appointment';
// import Space from '../DynamicComponents/Space/Space';
import DocHome from '../Doctors/Doctors/DocHome';
import './FormDesign.css'
import banner from '../../../assets/img/banner-img.png';
import { Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import downarrow from '../../../assets/img/downarrow.png'
// import leftarrow from '../../../assets/img/leftarrow.png'
// import rightarrow from '../../../assets/img/rightarrow.png'
// import "../../../assets/style.css"
const Home = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <>
            <main className="main-wrapper">
                {/* <Space /> */}
                <section className="banner-home">
                    {/* <article className="banner-design">
                        <div className="banner-header">
                            <h1>Book a Medical Appointment.</h1>
                            <p>It’s Simple and Free!</p>
                           
                            <img src={banner} alt="Logo" className="banner" />
                        </div>
                        <div className="banner-search">
                            <Search />
                        </div>
                    </article> */}
                    <div className="banner-design" style={{ marginLeft: "124px" }}>
                        <div className="banner-header" >
                            <div>
                                <div style={{ marginLeft: "88px" }}>
                                    <h1>Book a Medical Appointment.</h1>
                                    <p>It’s Simple and Free!</p>
                                </div>
                                <Search />
                            </div>
                        </div>
                        <div className="banner-search" style={{ marginTop: "-53px", marginLeft: "26px" }}>
                            <img src={banner} alt="Logo" className="" style={{ width: "70%" }} />
                        </div>

                    </div>
                </section>
                <Specialitites />
                <Three />
                <Appointment />

                <div className="section-header text-center titleDiv">
                    <div>Top Health Care Professionals to Solve Your Health Issues.</div>
                    <div className="underLineDiv"></div>
                </div>

                <DocHome />

                <Container>
                    <article id='f-box' className='text-center' style={{ display: "none" }}>

                        <div className="section-header text-center titleDiv">
                            <div>What People Say about Us</div>
                            <div className="underLineDiv"></div>
                        </div>
                        {/* <hr style={{width:"50%",size:10,align:"center"}}/> */}
                        <FeedBack />
                    </article>
                </Container>

                <div className="section-header text-center titleDiv">
                    <div>Find Doctors by city</div>
                    <div className="underLineDiv"></div>
                </div>
                <div>
                    <Row>
                        <Col className="doctorscol">Bangalore
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Delhi
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Mumbai
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Chennai
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Hyderabad
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Kolkata
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Ahmedabad
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Pune
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                        <Col className="doctorscol">Gujrat
                            {/* <p className="arrowicon"> <img src={downarrow} /></p> */}
                        </Col>
                    </Row>
                </div>



                <Container>
                    <div className="section-header text-center titleDiv">
                        <div>What People Say about Us</div>
                        <div className="underLineDiv"></div>
                    </div>
                    <div style={{ marginLeft: "72rem" }}>
                        {/* <button className="leftbtn"><img src={rightarrow} style={{ height: 25 }} /></button> */}
                        {/* <button className="leftbtn"><img src={leftarrow} style={{ height: 25 }} /></button> */}
                    </div>
                    <div className="row">
                        <Card style={{ width: '18rem', margin: 20 }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <p style={{ color: "blue" }}>More</p>
                                <hr />
                                <div>
                                    <div className="rating" style={{ marginLeft: "130px" }}>
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt} />&nbsp;&nbsp;
                                        <span className="d-inline-block average-rating">3.5</span>
                                    </div>
                                    <p style={{ marginTop: -37 }}>Roman Rock</p>

                                    <p>CEO.Google</p>
                                </div>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin: 20 }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <p style={{ color: "blue" }}>More</p>
                                <hr />
                                <div>
                                    <div className="rating" style={{ marginLeft: "130px" }}>
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt} />&nbsp;&nbsp;
                                        <span className="d-inline-block average-rating">3.5</span>
                                    </div>
                                    <p style={{ marginTop: -37 }}>Roman Rock</p>

                                    <p>CEO.Google</p>
                                </div>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin: 20 }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <p style={{ color: "blue" }}>More</p>
                                <hr />
                                <div>
                                    <div className="rating" style={{ marginLeft: "130px" }}>
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt} />&nbsp;&nbsp;
                                        <span className="d-inline-block average-rating">3.5</span>
                                    </div>
                                    <p style={{ marginTop: -37 }}>Roman Rock</p>

                                    <p>CEO.Google</p>
                                </div>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin: 20 }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <p style={{ color: "blue" }}>More</p>
                                <hr />
                                <div>
                                    <div className="rating" style={{ marginLeft: "130px" }}>
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt} />&nbsp;&nbsp;
                                        <span className="d-inline-block average-rating">3.5</span>
                                    </div>
                                    <p style={{ marginTop: -37 }}>Roman Rock</p>

                                    <p>CEO.Google</p>
                                </div>

                            </Card.Body>
                        </Card>
                        <p style={{ marginLeft: "55rem", color: "blue" }}>View All -&gt; </p>
                    </div>
                </Container>

                <Blog />
            </main>
        </>
    );
}

export default Home;