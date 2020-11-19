import React, { Component } from 'react';
import cover from '../common/images/covers-cover.jpg';
class NewsCatalog extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <section className="section section--first section--bg homecolor" ><div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section__wrap">
                            <h2 className="section__title">Catalog grid</h2>
                            <ul className="breadcrumb homecolor"><li className="breadcrumb__item"><a href="#">Home</a></li>
                                <li className="breadcrumb__item breadcrumb__item--active">Catalog grid</li>
                            </ul></div>
                    </div>
                </div>
            </div>
        </section>
        <div class="filter">
         <div class="container">
        </div>
        </div>
<div class="catalog">

    <div class="container">
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div class="card bg-dark text-white homecolor border-0 mt-5">
                <img class="card-img newest-news h-75 img-fluid" src={cover} alt="Card image cap"/>
                <div class="">
                    <p class="card-text font-weight-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            </div>
            <div className="col-lg-6 ">
                <div className="col col-sm-12">
                <div class="card bg-dark text-white homecolor border-0">
                <img class="card-img newest-news2 mx-auto d-block img-fluid w-75" src={cover} alt="Card image cap"/>
                <div class=" mx-auto d-block w-75">
                    <p class="card-text font-weight-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
                </div>
                <div className="col col-sm-12">
                <div class="card bg-dark text-white  homecolor border-0">
                <img class="card-img newest-news2 mx-auto d-block img-fluid w-75" src={cover} alt="Card image cap"/>
                <div class="mx-auto d-block w-75">
                    <p class="card-text font-weight-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
                </div>  
                
            </div>

        </div>

        <h2 className="section__title">Tin tức mới nhất</h2>
        <div class="row">

            {/* Item */}
            <div class="col-sm-6">
                <div class="card homecolor border-0 news_wrap mr-2">
                <div class="row">
                    <div class=" col-sm-6">
                        <img src={cover} className="img-thumbnail mx-auto d-block w-75 h-75"/>
                        
                    </div>
                    <div class=" col-sm-6">  
                    <div class="card-body">
                       
                        <div className="card__description card__description--details b-description_readmore_ellipsis text-light" >
                            It is a long established fact that a reader.
                        </div>
                        <small className="text-light">09/09/2020</small>
                    </div>
                    </div>
 
                    </div>
                </div>
            </div>
            {/* <!-- paginator --> */}
            <div class="col-12">
                <ul class="paginator"><li class="paginator__item paginator__item--prev">
                        <a href="#"><i class="icon ion-ios-arrow-back"></i></a>
                    </li>
                    <li class="paginator__item paginator__item--active"><a href="#">1</a></li>
                    <li class="paginator__item "><a href="0#">2</a></li>
                    <li class="paginator__item"><a href="#">3</a></li>
                    <li class="paginator__item"><a href="#">4</a></li>
                    <li class="paginator__item paginator__item--next">
                        <a href="#"><i class="icon ion-ios-arrow-forward"></i></a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>

        );
    }
}
export default NewsCatalog;