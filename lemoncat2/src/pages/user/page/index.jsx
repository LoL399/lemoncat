import React, { Component } from 'react';
import cover from '../common/images/covers-cover.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class MainPage extends Component {
    state = {  }
    render() { 
		
        return ( 	
		<div>
        <section className="home">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="home__title"><b>	CHƯƠNG TRÌNH MỚI</b> CỦA MÙA</h1>
					<CarouselManager/>
				</div>

				<div className="col-12">
			</div>
		</div>
	</div>
	</section>
	<section className="content bg-dark">
	<div className="content__head">
			<div className="container">
				<div className="row">
					<div className="col-12">

						<h2 className="content__title">New items</h2>

						<ul className="nav nav-tabs content__tabs border-0" id="content__tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Phim ảnh</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Tin tức</a>
							</li>
						</ul>
						<div className="content__mobile-tabs" id="content__mobile-tabs">
							<div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<input type="button" value="New items"/><span></span>
							</div>

							<div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
								<ul className="nav nav-tabs border-0" role="tablist"><li className="nav-item" data-value="new releases"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Phim ảnh</a></li>

									<li className="nav-item" data-value="movies"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Tin tức</a></li>


									
								</ul></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
					<div className="row">

						<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list bg-dark border-0">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={cover} alt=""/><a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
											<span className="card__category">
												<a href="#">Action</a>
												<a href="#">Triler</a>
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>

												<ul className="card__list"><li>HD</li>
													<li>16+</li>
												</ul></div>

											<div className="card__description">
												<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>



					</div>
				</div>
				
				<div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
					<h1>Hi there</h1>
				</div>
			</div>
		</div>

	</section>
	</div>);
    }
}

class CarouselManager extends Component {
	state = {  }
	render() { 
		const responsive = {
			superLargeDesktop: {
			  // the naming can be any, depends on you.
			  breakpoint: { max: 4000, min: 3000 },
			  items: 5
			},
			desktop: {
			  breakpoint: { max: 3000, min: 1024 },
			  items: 3
			},
			tablet: {
			  breakpoint: { max: 1024, min: 464 },
			  items: 2
			},
			mobile: {
			  breakpoint: { max: 464, min: 0 },
			  items: 1
			}
		  };
		return ( <Carousel responsive={responsive}>
			{/* item */}
			<div className="card card--big home text-white border-0">
				<div className="card__cover">
					<img src={cover} alt="1"/><a href="#" className="card__play">
						<i className="icon ion-ios-play"></i></a>
				</div>
				<div className="card__content text-center ">
					<h3 className="card__title"><a href="#">I dream in Another Language</a></h3>
					<span className="card__rate "><i className="icon ion-ios-star text-right"></i>4.4</span>
				</div>
			</div>
			{/* item */}
			<div className="card card--big home text-white border-0">
				<div className="card__cover">
					<img src={cover} alt="1"/><a href="#" className="card__play">
						<i className="icon ion-ios-play"></i></a>
				</div>
				<div className="card__content text-center ">
					<h3 className="card__title"><a href="#">I dream in Another Language</a></h3>
					<span className="card__rate "><i className="icon ion-ios-star text-right"></i>4.4</span>
				</div>
			</div>
							{/* item */}
							<div className="card card--big home text-white border-0">
				<div className="card__cover">
					<img src={cover} alt="1"/><a href="#" className="card__play">
						<i className="icon ion-ios-play"></i></a>
				</div>
				<div className="card__content text-center ">
					<h3 className="card__title"><a href="#">I dream in Another Language</a></h3>
					<span className="card__rate "><i className="icon ion-ios-star text-right"></i>4.4</span>
				</div>
			</div>
							{/* item */}
							<div className="card card--big home text-white border-0">
				<div className="card__cover">
					<img src={cover} alt="1"/><a href="#" className="card__play">
						<i className="icon ion-ios-play"></i></a>
				</div>
				<div className="card__content text-center ">
					<h3 className="card__title"><a href="#">I dream in Another Language</a></h3>
					<span className="card__rate "><i className="icon ion-ios-star text-right"></i>4.4</span>
				</div>
			</div>
			</Carousel> );
	}
}
 


export default MainPage;