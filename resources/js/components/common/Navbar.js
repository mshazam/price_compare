import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return(
		<section id="wd-header-2" className="wd-header-nav sticker-nav mob-sticky">
		<Container className="custom-width">
			<Row>
                <Col className="col-md-8 col-2 col-sm-6 col-md-4 d-block d-lg-none">
                     <div className="accordion-wrapper hide-sm-up">
                        <Link to="#" className="mobile-open"><i className="fa fa-bars" ></i></Link>
                        <ul id="mobilemenu" className="accordion">
                            <li className="mob-logo"><Link to="index.html"><img src="img/logo.png" alt="" /></Link></li>
                            <li><Link className="closeme" to="#"><i className="fa fa-times" ></i></Link></li>
                            <li className="mob-logo"><Link to="index.html"><img src="img/logo.png" alt="" /></Link></li>
                            
                            <li>
                                <div className="link">Home<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu font-sky">
                                    <li><Link to="index.html">Home one</Link></li>
                                    <li><Link to="index-01-02.html">Home one Fullwidth</Link></li>
                                    <li><Link to="index-second-home.html">Home two</Link></li>
                                    <li><Link to="index-third-home.html">Home three</Link></li>
                                    <li><Link to="magazine.html">Home Page Magazine </Link></li>
                                </ul>
                            </li>
                            <li>
                                <div className="link">Comparison Product <i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu font-sky">
                                    <li><Link to="compare-products.html">Comparison Product</Link></li>
                                    <li><Link to="compare-products-single.html">Compare Products Single</Link></li>
                                    <li><Link to="compare-products-choose-market.html">Compare Products Choose Market</Link></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <div className="link ">shop<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">

                                    <li><Link to="shop-left-sidebar.html">Shop Page</Link></li>
                                    <li><Link to="shop-right-sidebar.html">Shop Right Sidebar</Link></li>
                                    <li><Link to="shop-left-sidebar-full-grid.html">Shop Left Sidebar Full Grid</Link></li>
                                    <li><Link to="shop-right-sidebar-full-grid.html">Shop Right Sidebar Full Grid</Link></li>
                                    <li><Link to="product-details.html">Product Details</Link></li>
                                    <li><Link to="product-details-scroll.html">Product Details v2</Link></li>
                                    <li><Link to="wishlist.html">Wishlist View</Link></li>
                                </ul>
                            </li>

                            <li>
                                <div className="link">megamenu<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu ">
                                  <li><Link to="shop-left-sidebar.html">Visual Phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Chinese phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Google Phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Video cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Top Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Cheap Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Best Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Luxury Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Simple Cameras</Link></li>
                                  <li><Link to="shop-left-sidebar.html">Phone Electronice</Link></li>
					              <li><Link to="shop-left-sidebar.html">Phone Appereances</Link></li>
					              <li><Link to="shop-left-sidebar.html">Visual Phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Chinese phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Google Phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Cheap Phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Luxury phones</Link></li>
					              <li><Link to="shop-left-sidebar.html">Simple phones</Link></li>
                                  <li><Link to="shop-left-sidebar.html">Camera Electronice</Link></li>
					              <li><Link to="shop-left-sidebar.html">Camera Appereances</Link></li>
					              <li><Link to="shop-left-sidebar.html">DSLR</Link></li>
					              <li><Link to="shop-left-sidebar.html">Video cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Top Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Cheap Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Best Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Luxury Cameras</Link></li>
					              <li><Link to="shop-left-sidebar.html">Simple Cameras</Link></li>
                                </ul>
                                
                            </li>
                            <li>
                                <div className="link">Reviews<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">
                                    <li><Link to="product-details-review-history.html">Product History</Link></li>
                                    <li><Link to="product-details-single-review.html">Single Review</Link></li>
                                    <li><Link to="review-left-sidebar.html">Review Left Sidebar</Link></li>
                                    <li><Link to="review-right-sidebar.html">Review Right Sidebar</Link></li>
                                </ul>
                            </li>
                            <li>
                                <div className="link">Blog<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">
                                    <li><Link to="blog-full-grid.html">Blog Full Grid</Link></li>
                                    <li><Link to="blog-two-grid.html">Blog Two Grid</Link></li>
                                    <li><Link to="blog-three-grid.html">Blog Three Grid</Link></li>
                                    <li><Link to="blog-four-grid.html">Blog Four Grid</Link></li>
                                    <li><Link to="blog-four-grid-left-sidebar.html">Blog Four Grid Left Sidebar</Link></li>
                                    <li><Link to="blog-four-grid-right-sidebar.html">Blog Four Grid Right Sidebar</Link></li>
                                    <li><Link to="single-blog-with.html">Single Blog</Link></li>
                                    <li><Link to="single-blog-with-add.html">Single Blog With Add</Link></li>
                                </ul>
                            </li>
                            <li className="out-link"><Link className="" to="contact-us.html">Contact</Link></li>
                            <li className="out-link"><Link className="" to="coupon.html">Coupon</Link></li>

                        </ul>
                        
                    </div> 
	                <div className="col-xl-3 d-none d-xl-block">
	                        <div className="department">
	                            <img src="img/menu-bar.png" alt="menu-bar" />
	                            All Department
	                            <div className="shape-img">
	                                <img src="img/department-shape-img.png" className="img-fluid" alt="department img" />
	                            </div>
	                            <div id="department-list" className="department-list">
	                                <ul className="list-group">
	                                    <li className="list-group-item">
	                                        <a href="#!">
	                                            <div className="department-list-logo">
	                                                <img src="img/department-img/department-img-1.png" alt="" />
	                                            </div>
	                                            <span className="sub-list-main-menu">Furniture</span> <i className="fa fa-angle-right" aria-hidden="true"></i>
	                                        </a>
	                                        <div className="wd-sub-list">
	                                            <div className="container">
	                                                <div className="row">
	                                                    <div className="col-md-4">
	                                                        <h6 className="black-color wd-sub-list-title">Cameras and photos</h6>
	                                                        <ul className="wd-sub-menu">
	                                                            <li><Link to="shop-left-sidebar.html">Camera Electronice</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Camera Appereances</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">DSLR</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Video cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Top Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Cheap Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Best Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Luxury Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Simple Cameras</Link></li>
	                                                        </ul>
	                                                    </div>
	                                                    <div className="col-md-4">
	                                                        <h6 className="black-color wd-sub-list-title">Cameras and photos</h6>
	                                                        <ul className="wd-sub-menu">
	                                                            <li><Link to="shop-left-sidebar.html">Camera Electronice</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Camera Appereances</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">DSLR</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Video cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Top Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Cheap Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Best Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Luxury Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Simple Cameras</Link></li>
	                                                        </ul>
	                                                    </div>
	                                                    <div className="col-md-4">
	                                                        <h6 className="black-color wd-sub-list-title">Cameras and photos</h6>
	                                                        <ul className="wd-sub-menu">
	                                                            <li><Link to="shop-left-sidebar.html">Camera Electronice</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Camera Appereances</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">DSLR</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Video cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Top Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Cheap Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Best Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Luxury Cameras</Link></li>
	                                                            <li><Link to="shop-left-sidebar.html">Simple Cameras</Link></li>
	                                                        </ul>
	                                                    </div>
	                                                    <div className="col-md-6">
	                                                        <Link to="product-details-scroll.html"><img src="img/department-img/department-sub-list-img-1.jpg" className="department-sub-list-img" alt="department-sub-list-img" /></Link>
	                                                    </div>
	                                                    <div className="col-md-6">
	                                                        <Link to="product-details-scroll.html"><img src="img/department-img/department-sub-list-img-2.jpg" className="department-sub-list-img" alt="department-sub-list-img" /></Link>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-2.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Household</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-3.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Clothes</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-4.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Accessories</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-5.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Electronics</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-6.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Corporate staff</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-7.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Sinking staff</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-8.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Plant</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-9.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Washing machine</span></Link>
	                                    </li>
	                                    <li className="list-group-item"><Link to="product-details-scroll.html">
	                                        <div className="department-list-logo">
	                                            <img src="img/department-img/department-img-10.png" alt="" />
	                                        </div><span className="sub-list-main-menu">Winding staff</span></Link>
	                                    </li>
	                                </ul>
	                            </div>
	                        </div>
	                </div>
                </Col>
                <Col className="col-md-6 col-lg-10 col-xl-7 header-search-box d-none d-lg-block">
                        <div id="main-menu-2" className="main-menu-desktop no-border main-menu-sh">
                            <div className="menu-container wd-megamenu text-left">
                                <div className="menu">
                                    <ul className="wd-megamenu-ul">
                                        <li><Link to="index.html" className="main-menu-list"><i className="fa fa-home" aria-hidden="true"></i> Home <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></Link>
                                            <ul className="single-dropdown">
                                                <li><Link to="index.html">Home Page 1</Link></li>
                                                <li><Link to="index-01-02.html">Home page 1 Fullwidth</Link></li>
                                                <li><Link to="index-second-home.html">Home Page 2</Link></li>
                                                <li><Link to="index-third-home.html">Home Page 3</Link></li>
                                                <li><Link to="magazine.html">Home Page Magazine</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="compare-products.html" className="main-menu-list">Comparison Product <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></Link>
                                            <ul className="single-dropdown">
                                                <li><Link to="compare-products.html">Comparison Product</Link></li>
                                                <li><Link to="compare-products-single.html">Compare Products Single</Link></li>
                                                <li><Link to="compare-products-choose-market.html">Compare Products Choose Market</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="shop-left-sidebar.html" className="main-menu-list">Shop <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></Link>
                                            <ul className="single-dropdown">
                                                <li><Link to="shop-left-sidebar.html">Shop Page</Link></li>
                                                <li><Link to="shop-right-sidebar.html">Shop Right Sidebar</Link></li>
                                                <li><Link to="shop-left-sidebar-full-grid.html">Shop Left Sidebar Full Grid</Link></li>
                                                <li><Link to="shop-right-sidebar-full-grid.html">Shop Right Sidebar Full Grid</Link></li>
                                                <li><Link to="product-details.html">Product Details</Link></li>
                                                <li><Link to="product-details-scroll.html">Product Details v2</Link></li>
                                                <li><Link to="wishlist.html">Wishlist View</Link></li>
                                            </ul>
                                        </li>
                                        <li className="pos-inherit"><Link to="shop-left-sidebar.html" className="main-menu-list ">Shortcode <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></Link>
                                    <ul className="single-dropdown megamenu">
                                        <li><Link to="#" className="menu-subtitle">Shortcode One</Link>
                                            <ul className="sub-menu-list">
                                                <li><Link to="blurb-blog.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i> blurb-blog</Link></li>
                                                <li><Link to="blurb-call-to-action.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-call-to-action</Link></li>
                                                <li><Link to="blurb-carousel.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-carousel</Link></li>
                                                <li><Link to="blurb-compare-products.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-compare-products</Link></li>
                                                <li><Link to="blurb-footer.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-footer</Link></li>
                                                <li><Link to="blurb-counterup.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb Count up</Link></li>
                                                <li><Link to="404.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>404 page</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li><Link to="#" className="menu-subtitle">Shortcode Two</Link>
                                            <ul className="sub-menu-list">
                                                
                                                <li><Link to="blurb-product.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-product</Link></li>
                                                <li><Link to="blurb-reveiw.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-reveiw</Link></li>
                                                <li><Link to="blurb-service.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-service</Link></li>
                                                <li><Link to="blurb-widgetstyle-1.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-1</Link></li>
                                                <li><Link to="blurb-social.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb social icon</Link></li>
                                                <li><Link to="blurb-subscribe.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb Subscribe</Link></li>
                                                <li><Link to="coming-soon.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Coming Soon</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li><Link to="#" className="menu-subtitle">Shortcode three</Link>
                                            <ul className="sub-menu-list">
                                                <li><Link to="blurb-widgetstyle-2.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-2</Link></li>
                                                <li><Link to="blurb-widgetstyle-3.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-3</Link></li>
                                                <li><Link to="blurb-widgetstyle-4.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-4</Link></li>
                                                <li><Link to="blurb-widgetstyle-5.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-5</Link></li>
                                                <li><Link to="blurb-widgetstyle-6.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-6</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="product-details-scroll.html" className="add-img"><img src="img/nav-img-1.jpg" className="figure-img img-fluid" alt="Product Img" /></Link>
                                            <Link to="product-details-scroll.html" className="add-img"><img src="img/nav-img-2.jpg" className="figure-img img-fluid" alt="Product Img" /></Link>
                                        </li>
                                    </ul>
                                </li>
                                        <li><Link to="review-left-sidebar.html" className="main-menu-list">REVIEWS</Link>
                                            <ul className="single-dropdown">
                                                <li><Link to="product-details-review-history.html">Product History</Link></li>
                                                <li><Link to="product-details-single-review.html">Single Review</Link></li>
                                                <li><Link to="review-left-sidebar.html">Review Left Sidebar</Link></li>
                                                <li><Link to="review-right-sidebar.html">Review Right Sidebar</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="blog-four-grid-left-sidebar.html" className="main-menu-list">Blog</Link>
                                            <ul className="single-dropdown">
                                                <li><Link to="blog-full-grid.html">Blog Full Grid</Link></li>
                                                <li><Link to="blog-two-grid.html">Blog Two Grid</Link></li>
                                                <li><Link to="blog-three-grid.html">Blog Three Grid</Link></li>
                                                <li><Link to="blog-four-grid.html">Blog Four Grid</Link></li>
                                                <li><Link to="blog-four-grid-left-sidebar.html">Blog Four Grid Left Sidebar</Link></li>
                                                <li><Link to="blog-four-grid-right-sidebar.html">Blog Four Grid Right Sidebar</Link></li>
                                                <li><Link to="single-blog-with.html">Single Blog</Link></li>
                                                <li><Link to="single-blog-with-add.html">Single Blog With Add</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="coupon.html" className="main-menu-list">Coupon</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                <Col className="col-10 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-right"> 

                    <div className="header-cart">
                       <div className="account-section d-md-block d-lg-none">
								<button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg2">
									<i className="fa fa-sign-in" aria-hidden="true"></i><span>Login/Register</span> 
								</button>
                                
				        </div>
                        <div className="serch-wrapper">
                            <div className="search">
                                <input className="search-input" placeholder="Search" type="text" />
                                <Link to="#"><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <Link to="coupon.html" className="coupon-save"><i className="fa fa-star-o" aria-hidden="true"></i>
							    <span className="count">5</span>
							    </Link>
							    
								<Link className="header-wishlist" to="wishlist.html">
									<i className="fa fa-heart-o" aria-hidden="true"></i>
									<span className="count">8</span>
								</Link>
								<div className="dropdown wd-compare-btn">
								  <button className="btn btn-secondary dropdown-toggle compare-btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    <i className="fa fa-balance-scale"></i>

								  </button>
								  <span className="count">9</span>
								  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
								  	<div className="wd-item-list">
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-1.jpg" alt="cart-img" />
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-2.jpg" alt="cart-img" />
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-1.jpg" alt="cart-img" />
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-2.jpg" alt="cart-img" />
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-1.jpg" alt="cart-img" />
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star active-color" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
													<Link to="#"><i className="fa fa-star-o" aria-hidden="true"></i></Link>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									</div>
								  	<div className="media text-center">
										<Link to="compare-products.html" className="btn btn-primary go-compare-page">Compare 
										<i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
									</div>
								  </div>
								</div>
                    </div>
                </Col>
			</Row>
		</Container>
	</section>
		);
};
export default Navbar;