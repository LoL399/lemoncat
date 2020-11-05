import React, { Component } from 'react';

class RegistryUser extends Component {
    state = {  }
    render() { 
        return ( <div className="sign section--bg home">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">

						<form action="#" className="sign__form">
							<a href="index.html" className="sign__logo">
                                <h1 className="text-danger">LOGO</h1></a>
							
							<div className="sign__group">
							<input type="text" className="sign__input" placeholder="UserName"/></div>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Email"/></div>

							<div className="sign__group">
								<input type="password" className="sign__input" placeholder="Password"/></div>

                                <div className="sign__group">
								<input type="text" className="sign__input" placeholder="Phone Number"/></div>
							<button className="sign__btn" type="button">Tạo tài khoản</button>

							<span className="sign__text">Have an account? <a>Log in!</a></span>

							<span className="sign__text"><a href="forgot.html">Forgot password?</a></span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>  );
    }
}
 
export default RegistryUser;