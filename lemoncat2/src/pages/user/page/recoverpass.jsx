import React, { Component } from 'react';

class RecoverPass extends Component {
	state = { 
		showInputCode: false,
		showInputNewPass: false,
		buttonName: "Nhận mã khôi phục",
		infoLabel: "",
	 }

	 checkonClick(){

		if(!this.state.showInputNewPass)
		{
			if(!this.state.showInputCode)
				this.setState({showInputCode : !this.state.showInputCode});
			if(this.state.showInputCode)
			{
				this.setState({showInputNewPass : !this.state.showInputNewPass});
			}
		}

	 }
    render() { 
        return ( <div className="sign section--bg homecolor">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">

						<form action="#" className="sign__form">
							<a href="index.html" className="sign__logo">
                                <h1 className="text-danger">Quên mật khẩu</h1></a>
							<div className="sign__group">
							<input type="text" className="sign__input" placeholder="Email khôi phục"/></div>

							{this.state.showInputCode === true ?
								<div className="sign__group" >
								<input type="password" className="sign__input" placeholder="Mã khôi phục"/></div>: null}
							{this.state.showInputNewPass === true ?
							<div className="sign__group" >
								<input type="password" className="sign__input" placeholder="Mật khẩu mới"/></div>: null}

							<button className="sign__btn" type="button" onClick={()=>this.checkonClick()}>{this.state.buttonName}</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div> );
    }
}
 
export default RecoverPass;