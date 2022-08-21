import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const Searchbar = () => {
	return(
		<section id="wd-header">
		<div className="container-fluid custom-width">
			<div className="row">
				<div className="col-md-12 col-lg-3 col-xl-3 text-center second-home-main-logo">
					<Link to="index.html"><img src="img/logo.png" alt="Logo"/></Link>
				</div>
				<div className="col-md-6 col-lg-6 slider-search-section d-none d-lg-block">
						<div className="input-group">
							<div className="input-group-btn">
								<button type="button" className="btn btn-secondary wd-slider-search-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								All Categories <i className="fa fa-angle-down" aria-hidden="true"></i>
								</button>
								<div className="dropdown-menu wd-dropdown-menu">
									<div className="search-category">
										<div className="row">
											<div className="col-md-6">
												<h6 className="search-category-title">Cameras and photos</h6>
												 <ul>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Camera Electronice</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Camera Appereances</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> DSLR</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Video cameras</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Top Cameras</Link></li>
												 </ul>
											</div>
											<div className="col-md-6">
												<h6 className="search-category-title">Cameras and photos</h6>
												 <ul>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Camera Electronice</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Camera Appereances</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> DSLR</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Video cameras</Link></li>
												 	<li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Top Cameras</Link></li>
												 </ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<input type="text" className="form-control input-search-box" placeholder="Enter your search key ..." />
							<span className="input-group-btn">
								<button className="btn btn-secondary wd-search-btn" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
							</span>
						</div>
					</div>
				<div className="col-md-6 col-lg-3  col-xl-3 text-right">
					<button className="btn btn-primary my-account d-none d-lg-block" data-toggle="modal" data-target=".bd-example-modal-lg2">
						<i className="fa fa-user" aria-hidden="true"></i> My account
					</button>
					<div className="modal fade bd-example-modal-lg2" tabIndex="-1" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="container">
									<div className="row text-left">
										<div className="col-md-12 p0">

											<div className="modal-tab-section wd-modal-tabs">
												<ul className="nav nav-tabs wd-modal-tab-menu text-center" id="myTab" role="tablist">
													<li className="nav-item">
														<Link className="nav-link active" id="login-tab" data-toggle="tab" to="#login" role="tab" aria-controls="login" aria-expanded="true">Login</Link>
													</li>
													<li className="nav-item">
														<Link className="nav-link" id="sign-up-tab" data-toggle="tab" to="#sign-up" role="tab" aria-controls="sign-up">Sign up</Link>
													</li>
												</ul>
												<div className="tab-content" id="myTabContent">
													<div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">

													<div className="row">
														<div className="col-md-6 p0 brand-description-area">
															<img src="img/login-img-1.jpg" className="img-fluid" alt="" />
															<div className="brand-description">
																<div className="brand-logo">
																	<img src="img/logo.png" alt="Logo" />
																</div>
																<div className="modal-description">
																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
																</div>
																<ul className="list-unstyled">
																	<li className="media">
																		<i className="fa fa-check" aria-hidden="true"></i>
																		<div className="media-body">
																			Lorem ipsum dolor sit amet, consecadipisicing 
																			elit, sed do eiusmod teoccaecvoluptatem.
																		</div>
																	</li>
																	<li className="media my-4">
																		<i className="fa fa-check" aria-hidden="true"></i>
																		<div className="media-body">
																			Lorem ipsum dolor sit amet, consecadipisicing 
																			elit, sed do eiusmod teoccaecvoluptatem.
																		</div>
																	</li>
																	<li className="media">
																		<i className="fa fa-check" aria-hidden="true"></i>
																		<div className="media-body">
																			Lorem ipsum dolor sit amet, consecadipisicing 
																			elit, sed do eiusmod teoccaecvoluptatem.
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div className="col-md-12 col-lg-6 p0">
															<div className="login-section text-center">
																<div className="social-media">
																	<Link to="#" className="facebook-bg"><i className="fa fa-facebook" aria-hidden="true"></i> Login</Link>
																	<Link to="#" className="twitter-bg"><i className="fa fa-twitter" aria-hidden="true"></i> Login</Link>
																	<Link to="#" className="google-bg"><i className="fa fa-google-plus" aria-hidden="true"></i> Login</Link>
																</div>
																<div className="login-form text-left">
																	<form>
																		<div className="form-group">
																			<label htmlFor="exampleInputEmaillogin">User name</label>
																			<input type="text" className="form-control" id="exampleInputEmaillogin" placeholder="John mist |" />
																		</div>
																		<div className="form-group">
																			<label htmlFor="exampleInputPasswordlogin">Password</label>
																			<input type="password" className="form-control" id="exampleInputPasswordlogin" placeholder="*** *** ***" />
																		</div>
																		<button type="submit" className="btn btn-primary wd-login-btn">LOGIN</button>

																		<div className="form-check">
																			<label className="form-check-label">
																				<input type="checkbox" className="form-check-input" />
																				Save this password
																			</label>
																		</div>
																		
																		<div className="wd-policy">
																			<p>
																				By Continuing. I conferm that i have read and userstand the <Link to="#">terms of uses</Link> and <Link to="#">Privacy Policy</Link>. 
																				Don’t have an account? <Link to="#" className="black-color"><strong><u>Sign up</u></strong></Link>
																			</p>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</div>

													</div>
													<div className="tab-pane fade" id="sign-up" role="tabpanel" aria-labelledby="sign-up-tab">

													<div className="row">
														<div className="col-md-6 p0 brand-login-section">
															<img src="img/login-img-2.jpg" className="img-fluid" alt="" />
															<div className="brand-description">
																<div className="brand-logo">
																	<img src="img/logo.png" alt="Logo" />
																</div>
																<div className="modal-description">
																	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
																</div>
																<ul className="list-unstyled">
																	<li className="media">
																		<i className="fa fa-check" aria-hidden="true"></i>
																		<div className="media-body">
																			Lorem ipsum dolor sit amet, consecadipisicing 
																			elit, sed do eiusmod teoccaecvoluptatem.
																		</div>
																	</li>
																	<li className="media my-4">
																		<i className="fa fa-check" aria-hidden="true"></i>
																		<div className="media-body">
																			Lorem ipsum dolor sit amet, consecadipisicing 
																			elit, sed do eiusmod teoccaecvoluptatem.
																		</div>
																	</li>
																	<li className="media">
																		<i className="fa fa-check" aria-hidden="true"></i>
																		<div className="media-body">
																			Lorem ipsum dolor sit amet, consecadipisicing 
																			elit, sed do eiusmod teoccaecvoluptatem.
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div className="col-md-6 p0">
															<div className="sign-up-section text-center">
																<div className="login-form text-left">
																	<form>
																		<div className="form-group">
																			<label htmlFor="exampleInputname-sign-up">First name</label>
																			<input type="text" className="form-control" id="exampleInputname-sign-up" placeholder="First Name" />
																		</div>
																		<div className="form-group">
																			<label htmlFor="exampleInputname2-sign-up">Last name</label>
																			<input type="text" className="form-control" id="exampleInputname2-sign-up" placeholder="Last Name" />
																		</div>
																		<div className="form-group">
																			<label htmlFor="exampleInputEmailsign-up">Email</label>
																			<input type="text" className="form-control" id="exampleInputEmailsign-up" placeholder="Enter you email ..." />
																		</div>
																		<div className="form-group">
																			<label htmlFor="exampleInputPasswordsign-up">Password</label>
																			<input type="password" className="form-control" id="exampleInputPasswordsign-up" placeholder="*** *** ***" />
																		</div>
																		<button type="submit" className="btn btn-primary wd-login-btn">Sign Up</button>
																		
																		<div className="wd-policy">
																			<p>
																				By Continuing. I conferm that i have read and userstand the <Link to="#">terms of uses</Link> and <Link to="#">Privacy Policy</Link>. 
																				Don’t have an account? <Link to="#" className="black-color"><strong><u>Sign up</u></strong></Link>
																			</p>
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</div>

													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
		);
};
export default Searchbar;