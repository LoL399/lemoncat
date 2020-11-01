import React, { Component } from 'react';

class Login extends Component {
    state = {  
        message:''
    };

    usernameRef = React.createRef();
    passwordRef = React.createRef();
    // login = ()=>{
    //     const username=this.usernameRef.current.value;
    //     const password=this.passwordRef.current.value;
    //     UserService.login(username,password).then(res =>{
    //         if(res.data.errorCode > 0){
    //             this.setState({message: res.data.message});
    //         }else{
    //             //redirec to dashboard

    //             this.setState({message:""});
                
    //             //luu cookie  //expires:1 
    //             Cookies.set("loginInfo",JSON.stringify(res.data.data),{expires:1});  //JSON.stringify: ep du lieu thanh chuo json
    //             this.props.history.push("/instructors"); // quay ve trang duoc chi dinh
    //         }
    //     })

    //     //console.log(username,password); kiem tra da nhan duoc gia tri hay chua
    // }
    render() { 
        return ( 
            <div class="h-100">
                <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-sm-8 col-lg-5">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title mb-0">Login</h3>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div className="text-center text-danger mb-3">{this.state.message}</div>
                                    <div class="form-group">
                                        <label class="sr-only">Username</label>
                                        <div class="input-group input-group-lg">
                                            <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" ref={this.usernameRef} class="form-control" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="sr-only">Password</label>
                                        <div class="input-group input-group-lg">
                                            <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                                            </div>
                                            <input type="password" ref={this.passwordRef}class="form-control" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <button type="button" onClick={this.login} class="mt-4 btn btn-primary btn-lg btn-block">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Login;