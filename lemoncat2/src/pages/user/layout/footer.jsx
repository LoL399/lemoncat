import React, { Component } from 'react';

class FooterSection extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="footer">
                <div className="container">
			<div className="row">
				<div className="col-12 col-md-3">
					<h6 className="footer__title">Download Our App</h6>
					<ul className="footer__app"><li><a href="#"><img src="images/img-Download_on_the_App_Store_Badge.svg" alt=""/></a></li>
						<li><a href="#"><img src="images/img-google-play-badge.png" alt=""/></a></li>
					</ul></div>
				<div className="col-6 col-sm-4 col-md-3">
					<h6 className="footer__title">Resources</h6>
					<ul className="footer__list"><li><a href="about.html">About Us</a></li>
						<li><a href="pricing.html">Pricing Plan</a></li>
						<li><a href="faq.html">Help</a></li>
					</ul></div>
				<div className="col-6 col-sm-4 col-md-3">
					<h6 className="footer__title">Legal</h6>
					<ul className="footer__list"><li><a href="privacy.html">Terms of Use</a></li>
						<li><a href="privacy.html">Privacy Policy</a></li>
						<li><a href="privacy.html">Security</a></li>
					</ul></div>
				<div className="col-12 col-sm-4 col-md-3">
					<h6 className="footer__title">Contact</h6>
					<ul className="footer__list"><li><a href="tel:+18002345678">+1 800 234-5678</a></li>
						<li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
					</ul><ul className="footer__social"><li className="facebook"><a href="#"><i className="icon ion-logo-facebook"></i></a></li>
						<li className="instagram"><a href="#"><i className="icon ion-logo-instagram"></i></a></li>
						<li className="twitter"><a href="#"><i className="icon ion-logo-twitter"></i></a></li>
						<li className="vk"><a href="#"><i className="icon ion-logo-vk"></i></a></li>
					</ul></div>
                    
				<div className="col-12">
					<div className="footer__copyright">
						<small>&copy; 2020 FlixGo. Create by <a href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank">Dmitry Volkov</a></small>

						<ul><li><a href="privacy.html">Terms of Use</a></li>
							<li><a href="privacy.html">Privacy Policy</a></li>
						</ul></div>
				</div>
				
			</div>
		</div>
	</footer>
         );
    }
}
 
export default FooterSection;