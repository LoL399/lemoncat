import React, { Component } from 'react';
import cover from '../common/images/covers-cover.jpg';
import '../common/css/costumecss.css'
import ReactPlayer from 'react-player'
class MovieDetail extends Component {
    state = {  }
    render() { 
        return ( 
			<div className="h-100">
            <section className="section details home border-0 ">
                <div className="container">
					<div class="card card--details card--series home border-0 antihome">
						<div class="row">
						<div class="col-12">
					    <h1 class="details__title">I Dream in Another Language</h1>
				    	</div>
							<div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
								<div class="card__cover">
									<img src={cover} alt=""/>
								</div>
							</div>
							<div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
								<div class="card__content">
									<div class="card__wrap">
										<span class="card__rate"><i class="icon ion-ios-star"></i>8.4</span>

										<ul class="card__list">
											<li>HD</li>
											<li>16+</li>
										</ul>
									</div>

									<ul class="card__meta">
										<li><span>Genre:</span> <a href="#">Action</a>
										<a href="#">Triler</a></li>
										<li><span>Release year:</span> 2017</li>
										<li><span>Running time:</span> 120 min</li>
										<li><span>Country:</span> <a href="#">USA</a> </li>
									</ul>

									<div class="b-description_readmore_wrapper js-description_readmore_wrapper" ><div class="card__description card__description--details b-description_readmore_ellipsis" >
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
									</div>
									<div class="b-description_readmore_button"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=" d-flex justify-content-center">
					<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
					</div>

				</div>


            </section>
			<section className="content homecolor">
			<div class="content__head">
			<div class="container">
				<div class="row">
					<div class="col-12">

						<h2 class="content__title">Discover</h2>

						<ul class="nav nav-tabs content__tabs border-0" id="content__tabs" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Comments</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Reviews</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Photos</a>
							</li>
						</ul>

						<div class="content__mobile-tabs" id="content__mobile-tabs">
							<div class="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<input type="button" value="Comments"/>
								<span></span>
							</div>

							<div class="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
								<ul class="nav nav-tabs" role="tablist">
									<li class="nav-item" data-value="comments"><a class="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Comments</a></li>

									<li class="nav-item" data-value="reviews"><a class="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Reviews</a></li>

									<li class="nav-item" data-value="photos"><a class="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Photos</a></li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className="container mt-4">
				<div className="row">

						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
								<CommentArea/>
							</div>
							<div className="tab-pane fade " id="tab-2" role="tabpanel" aria-labelledby="2-tab">
							{/* Hey listen */}
								<ReviewArea/>

							</div>
				
						</div>
					</div>
			</div>
		</div>		
			</section>
		</div>
         );
    }
}

class CommentArea extends Component {
	state = {  }
	render() { 
		return ( 							
		<div className="row">
		<div className="comments">
			{/* Hey listen */}
			<ul class="comments__list">
					<li class="comments__item">
						<div class="comments__autor">
							<img class="comments__avatar" src={cover} alt=""/>
							<span class="comments__name">John Doe</span>
							<span class="comments__time">30.08.2018, 17:53</span>
						</div>
						<p class="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
						<div class="comments__actions">
							<div class="comments__rate">
								<button type="button"><i class="icon ion-md-thumbs-up"></i>12</button>

								<button type="button">7<i class="icon ion-md-thumbs-down"></i></button>
							</div>

							<button type="button"><i class="icon ion-ios-share-alt"></i>Reply</button>
							<button type="button"><i class="icon ion-ios-quote"></i>Quote</button>
						</div>
					</li>
					<li class="comments__item">
						<div class="comments__autor">
							<img class="comments__avatar" src="images/img-user.svg" alt=""/>
							<span class="comments__name">John Doe</span>
							<span class="comments__time">30.08.2018, 17:53</span>
						</div>
						<p class="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
						<div class="comments__actions">
							<div class="comments__rate">
								<button type="button"><i class="icon ion-md-thumbs-up"></i>12</button>

								<button type="button">7<i class="icon ion-md-thumbs-down"></i></button>
							</div>

							<button type="button"><i class="icon ion-ios-share-alt"></i>Reply</button>
							<button type="button"><i class="icon ion-ios-quote"></i>Quote</button>
						</div>
					</li>

					
				</ul>
				<form action="#" class="form">
					<textarea id="text" name="text" class="form__textarea" placeholder="Add comment"></textarea>
					<button type="button" class="form__btn">Send</button>
				</form>
		</div>

	</div> );
	}
}

class ReviewArea extends Component {
	state = {  }
	render() { 
		return ( 							
		<div class="row">

		<div class="col-12">
			<div class="reviews">
				<ul class="reviews__list">
					<li class="reviews__item">
						<div class="reviews__autor">
							<img class="reviews__avatar" src="images/img-user.svg" alt=""/>
							<span class="reviews__name">Best Marvel movie in my opinion</span>
							<span class="reviews__time">24.08.2018, 17:53 by John Doe</span>

							<span class="reviews__rating"><i class="icon ion-ios-star"></i>8.4</span>
						</div>
						<p class="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
					</li>

					<li class="reviews__item">
						<div class="reviews__autor">
							<img class="reviews__avatar" src="images/img-user.svg" alt=""/>
							<span class="reviews__name">Best Marvel movie in my opinion</span>
							<span class="reviews__time">24.08.2018, 17:53 by John Doe</span>

							<span class="reviews__rating"><i class="icon ion-ios-star"></i>9.0</span>
						</div>
						<p class="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
					</li>

					<li class="reviews__item">
						<div class="reviews__autor">
							<img class="reviews__avatar" src="images/img-user.svg" alt=""/>
							<span class="reviews__name">Best Marvel movie in my opinion</span>
							<span class="reviews__time">24.08.2018, 17:53 by John Doe</span>

							<span class="reviews__rating"><i class="icon ion-ios-star"></i>7.5</span>
						</div>
						<p class="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
					</li>
				</ul>

			<div class="reviews">
				<ul class="reviews__list">
					<li class="reviews__item">
						<div class="reviews__autor">
							<img class="reviews__avatar" src="images/img-user.svg" alt=""/>
							<span class="reviews__name">Best Marvel movie in my opinion</span>
							<span class="reviews__time">24.08.2018, 17:53 by John Doe</span>

							<span class="reviews__rating"><i class="icon ion-ios-star"></i>8.4</span>
						</div>
						<p class="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
					</li>

					<li class="reviews__item">
						<div class="reviews__autor">
							<img class="reviews__avatar" src="images/img-user.svg" alt=""/>
							<span class="reviews__name">Best Marvel movie in my opinion</span>
							<span class="reviews__time">24.08.2018, 17:53 by John Doe</span>

							<span class="reviews__rating"><i class="icon ion-ios-star"></i>9.0</span>
						</div>
						<p class="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
					</li>

					<li class="reviews__item">
						<div class="reviews__autor">
							<img class="reviews__avatar" src="images/img-user.svg" alt=""/>
							<span class="reviews__name">Best Marvel movie in my opinion</span>
							<span class="reviews__time">24.08.2018, 17:53 by John Doe</span>

							<span class="reviews__rating"><i class="icon ion-ios-star"></i>7.5</span>
						</div>
						<p class="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
					</li>
				</ul>
				{/* 
				<form action="#" class="form">
					<input type="text" class="form__input" placeholder="Title"/>
					<textarea class="form__textarea" placeholder="Review"></textarea>
					<div class="form__slider">
						<div class="form__slider-rating noUi-target noUi-ltr noUi-horizontal" id="slider__rating"><div class="noUi-base"><div class="noUi-connects"><div class="noUi-connect" style="transform: translate(0%, 0px) scale(0.86, 1);"></div></div><div class="noUi-origin" style="transform: translate(-14%, 0px); z-index: 4;"><div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="86.0" aria-valuetext="8.6"></div></div></div></div>
						<div class="form__slider-value" id="form__slider-value">8.6</div>
					</div>
					<button type="button" class="form__btn">Send</button>
				</form> */}
			</div></div>
		</div>

	</div> );
	}
}


 
export default MovieDetail;