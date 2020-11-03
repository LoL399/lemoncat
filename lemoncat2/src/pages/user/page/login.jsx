import { timers } from 'jquery';
import React, { Component } from 'react';

class LoginUser extends Component {
    state = { remember:false }

    remembercheck(){ this.state.remember===false ? this.setState({remember: true }) : this.setState({remember: false })}

    render() { 
        return ( 
        <div className="sign section--bg bg-dark">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">

						<form action="#" className="sign__form">
							<a href="index.html" className="sign__logo">
                                <h1 className="text-danger">LOGO</h1></a>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Email"/></div>

							<div className="sign__group">
								<input type="password" className="sign__input" placeholder="Password"/></div>

							<div className="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" checked={this.state.remember} onClick={()=>this.remembercheck()}/><label for="remember">Remember Me</label>
							</div>
							
							<button className="sign__btn" type="button">Sign in</button>

							<span className="sign__text">Don't have an account? <a>Sign up!</a></span>

							<span className="sign__text"><a href="forgot.html">Forgot password?</a></span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div> );
    }
}
 
export default LoginUser;