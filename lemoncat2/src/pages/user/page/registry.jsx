import React, { Component } from 'react';
import logo from "../common/Catlogo.png";
import { Link } from "react-router-dom";
import $ from 'jquery';
import {emailValidation, passValidation, phoneValidation} from '../common/validation.js'

class RegistryUser extends Component {
	state = { username:"", email: "", password: "", phone: "",  emailValidate: "", passValidate: "", phoneValide: ""}
	
	componentDidMount(){
		$(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip();
		  });
	}
	handleChange = event => {
		this.setState({[event.target.name]: event.target.value});
		this.validateForm();
	}

	validateForm(){
		this.state.emailValidate = emailValidation(this.state.email);
		this.state.passValidate = passValidation(this.state.password);
		this.state.phoneValide = phoneValidation(this.state.phone);

	}

    render() { 
        return ( 
		<div className="sign section--bg homecolor">
		<div className="container">
			<div className="row">
				<div className="col-12 mt-5">
					<div className="sign__content">

						<form action="#" className="sign__form">
						<img src={logo} className="header__logo logoLemon bg-transparent "/>
							
							<div className="sign__group">
							<input type="text" className="sign__input" placeholder="UserName" name="username" value={this.state.username} onChange={this.handleChange} /></div>

							<div className="sign__group">
								<input type="text" data-toggle="tooltip" title={this.state.emailValidate} 
								className={this.state.emailValidate === "" ? "sign__input" : "sign__input border border-danger"} placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/></div>

							<div className="sign__group">
								<input type="password" data-toggle="tooltip" title={this.state.passValidate} 
								className={this.state.passValidate === "" ? "sign__input" : "sign__input border border-danger"} placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}/></div>

                                <div className="sign__group">
								<input type="text" data-toggle="tooltip" title={this.state.phoneValide} 
								className={this.state.phoneValide === "" ? "sign__input" : "sign__input border border-danger"} placeholder="Phone Number" name="phone" onChange={this.handleChange} value={this.state.phone}/></div>
							<button className="sign__btn" type="button">Tạo tài khoản</button>
							<div className="sign__group">

							</div>
							<ul className="footer__social sign__text m-0">
								<li className="facebook">
								<a data-toggle="tooltip" title="Đăng ký bằng facebook!"><i className="icon ion-logo-facebook"></i></a></li>
								<li className="twitter"><a data-toggle="tooltip" title="Đăng ký bằng google!"><i className="icon ion-logo-google"></i></a></li>
							</ul>

							<span className="sign__text">Đã có tài khoản? <Link to="/home/login">Đăng nhập thôi!</Link></span>


							<span className="sign__text"><Link to ="/home/forgot">Quên mật khẩu?</Link></span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>  );
    }
}
 
export default RegistryUser;