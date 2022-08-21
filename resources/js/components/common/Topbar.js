import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
const Topbar = () => {
	return(<section id="wd-header-top">
    <Container >
        <Row>
            <Col className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                <div className="wb-social-media">
						<Link to="#" className="bh"><i className="fa fa-behance"></i></Link>
						<Link to="#" className="fb"><i className="fa fa-facebook-official"></i></Link>
						<Link to="#" className="db"><i className="fa fa-dribbble"></i></Link>
						<Link to="#" className="gp"><i className="fa fa-google-plus"></i></Link>
						<Link to="#" className="vn"><i className="fa fa-vine"></i></Link>
						<Link to="#" className="yt"><i className="fa fa-youtube-play"></i></Link>
				</div>
            </Col>
            <Col className="col-sm-12 col-md-4 col-lg-5 col-xl-6 d-none d-md-block">
                <div className="offer-text text-center">
                    <p className="text-uppercase">upto 50% off to all virtual products</p>
                </div>
            </Col>
            <Col className="col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3">
                <div className="language-and-currency-btn">

                    <img src="img/flag-icon.jpg" alt="flag-icon" />
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop3" type="button" className="btn btn-secondary wd-btn-country dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						      English
						    </button>
                            <div className="dropdown-menu wd-btn-country-list" aria-labelledby="btnGroupDrop3">
                                <Link className="dropdown-item" to="#"><img src="img/flag-icon-2.png" alt="flag-icon" /> Bangla</Link>
                                <Link className="dropdown-item" to="#"><img src="img/flag-icon-3.png" alt="flag-icon" /> Spanish</Link>
                            </div>
                        </div>
                    </div>

                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop4" type="button" className="btn btn-secondary wd-btn-language dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						      Currency
						    </button>
                            <div className="dropdown-menu wd-btn-language-list" aria-labelledby="btnGroupDrop4">
                                <Link className="dropdown-item" to="#">&#36; Dollar</Link>
                                <Link className="dropdown-item" to="#">&#163; Pound</Link>
                                <Link className="dropdown-item" to="#">&#8364; Euro</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
   </Container>
</section>);
};
export default Topbar;