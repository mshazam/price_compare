import React from 'react';
import {Link} from 'react-router-dom';
const Slider = () => {
	return(
		<section id="main-slider-section">
			<div id="main-slider" className="slider-bg2  owl-carousel owl-theme product-review slider-cat">
				<div className="item d-flex  slider-bg align-items-center">
					<div className="container-fluid">
						<div className="row justify-content-end">
						
							<div className="slider-text col-sm-6  col-xl-4   col-md-6 order-2 order-sm-1">
								<h6 className="sub-title">Choose your favourite market</h6>
								<h1 className="slider-title"><strong className="highlights-text">Compare</strong> Best Prices</h1>
								<p className="slider-content">Grabe it hurry.</p>
								<Link to="shop-left-sidebar.html" className="btn btn-primary wd-shop-btn slider-btn">
									Go to store <i className="fa fa-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
							<div className="col-sm-6  col-md-6 col-xl-6 order-1 order-sm-2 slider-img">
							    <img src="img/slider-img/slider3.png" alt="" />
							</div>
						</div>
					</div>
				</div>
		       <div className="item d-flex  slider-bg align-items-center">
					<div className="container-fluid">
						<div className="row justify-content-end">
							<div className="slider-text  col-sm-6 col-xl-4    col-md-6">
								<h6 className="sub-title">Choose your favourite market</h6>
								<h1 className="slider-title"><strong className="highlights-text">Compare</strong> Best Prices</h1>
								<p className="slider-content">Grabe it hurry.</p>
								<Link to="shop-left-sidebar.html" className="btn btn-primary wd-shop-btn slider-btn">
									Go to store <i className="fa fa-arrow-right" aria-hidden="true"></i>
								</Link>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-6  slider-img fadeInDown animated">
							    <img src="img/slider-img/slider4.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		);
};
export default Slider;