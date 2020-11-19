import React, { Component } from 'react';
import { ModalBody, Modal,Button } from 'react-bootstrap';
class UserPage extends Component {
    state = { 
        modalState: false,
        tabType: 0
     }
     setModalState=()=>{
        this.state.modalState===false ? this.setState({modalState: true}) : this.setState({modalState: false})
      }

     renderSwitch(param) {
        switch(param) {
          case 1:
            return <InfoChange/>;
        case 2:
            return <PassChange/>;
        case 3:
            return <ActivityChange/>;
        default:
          return null
        }
      }
    infoHandler(bool,param){
        this.setState({modalState: bool});
        this.setState({tabType: param});
    }
    
    render() { 
        return ( 
            <div className="h-100">
            <section className="section details homecolor border-0 ">
                <div className="content__head container">
                    <div className="row">
                    <div class="row mt-5 align-items-center">
                <div class="col-md-3 text-center mb-5">
                  <div class="avatar avatar-xl">
                    <img src="./assets/avatars/face-1.jpg" alt="..." class="avatar-img rounded-circle"/>
                  </div>
                </div>
                <div class="col">
                  <div class="row align-items-center">
                    <div class="col-md-7">
                      <h4 class="mb-1 labelGradient">Brown, Asher</h4>
                      <p class="small mb-3"><span class="badge badge-dark">New York, USA</span></p>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-7">
                      <p class="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at, pretium blandit sapien. </p>
                    </div>
                    <div class="col">
                      <p class="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                      <p class="small mb-0 text-muted">P.O. Box 464, 5975 Eget Avenue</p>
                      <p class="small mb-0 text-muted">(537) 315-1481</p>
                    </div>
                  </div>
                </div>
              </div>
                    </div>
                </div>
                {/*ultilities */}
                <div className="container">
                <div class="row my-4">
                    {/* card 1 */}
                <div class="col-md-4">
                  <div class=" mb-4 text-light content__head container">
                    <div class="card-body my-n3">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-lg bg-light">
                            <i class="fe fe-user fe-24 text-primary"></i>
                          </span>
                        </div> 
                        <div class="col">
                          <a href="#">
                            <h3 class="mt-4 mb-1 labelGradient">Personal</h3>
                          </a>
                          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        </div> 
                      </div> 
                      <button className="sign__btn" type="button" onClick={()=>this.infoHandler(true,1)}>Chỉnh sửa thông tin cá nhân</button>
                    </div> 
                    
                  </div> 
                </div> 
                {/* card 2 */}
                <div class="col-md-4">
                  <div class="mb-4 text-light content__head container">
                    <div class="card-body my-n3">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-lg bg-light">
                            <i class="fe fe-shield fe-24 text-primary"></i>
                          </span>
                        </div> 
                        <div class="col">
                          <a href="#">
                            <h3 class=" mt-4 mb-1 labelGradient">Security</h3>
                          </a>
                          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        </div> 
                      </div> 
                      <button className="sign__btn" type="button" onClick={()=>this.infoHandler(true,2)}>Thay đổi mật khẩu</button>
                    </div>

                  </div> 
                </div>

                {/* card 3 */}
                <div class="col-md-4">
                  <div class="mb-4 text-light content__head container">
                    <div class="card-body my-n3">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-lg bg-light">
                            <i class="fe fe-bell fe-24 text-primary"></i>
                          </span>
                        </div> 
                        <div class="col">
                          <a href="#">
                            <h3 class="labelGradient mt-4 mb-1">Notifications</h3>
                          </a>
                          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        </div> 
                      </div>
                      <button className="sign__btn" type="button" onClick={()=>this.infoHandler(true,3)}>Xem nhật ký hoạt động</button>
                    </div> 

                  </div>
                </div> 
              </div>
                </div>
                <Modal
                show={this.state.modalState}
                onHide={this.setModalState}   
              >
                <Modal.Body className="homecolor">
                    <div className="row">
                    {/*  */}
                    
                    </div>
                     
                    <div className="section--bg homecolor">
                   
                        <div className="container">
                       
                            <div className="row">
                            <button className="float-right text-right labelGradient h2 " onClick={()=>this.infoHandler(false,3)}>x</button>
                            
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                    
                                    {this.renderSwitch(this.state.tabType)}
                                   
                                    
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> 
                </Modal.Body>
            </Modal>

            </section></div>
        );
    }
}

class InfoChange extends Component {
    state = {  }
    render() { 
        return ( 

                <form action="#" className=" mt-3 mb-3">
                <h3 class="text-white mb-4">Chỉnh thông tin cá nhân</h3>
                <div className="sign__group">
                <input type="text" className="sign__input" placeholder="UserName"/></div>

                <div className="sign__group">
                    <input type="text" className="sign__input" placeholder="Email"/></div>

                <div className="sign__group">
                    <input type="password" className="sign__input" placeholder="Password"/></div>

                    <div className="sign__group">
                    <input type="text" className="sign__input" placeholder="Phone Number"/></div>
                <button className="sign__btn" type="button">Tạo tài khoản</button>
            </form>



        );
    }
}

class PassChange extends Component {
    state = {  }
    render() { 
        return (                 
        <form action="#" className="mb-3">
        <h3 class="text-white mt-4 mb-4">Thay đổi mât khẩu</h3>
        <div className="sign__group">
        <input type="text" className="sign__input" placeholder="Mật khẩu cũ"/></div>

        <div className="sign__group">
            <input type="text" className="sign__input" placeholder="Mật khẩu mới"/></div>

        <div className="sign__group">
            <input type="password" className="sign__input" placeholder="Nhập lại mât khẩu mới - xác minh"/></div>

        <button className="sign__btn" type="button">Thay đổi mật khẩu</button>
    </form> 
    );
    }
}

class ActivityChange extends Component {
    state = {  }
    render() { 
        return ( <h1>Activity</h1> );
    }
}


 
export default UserPage;