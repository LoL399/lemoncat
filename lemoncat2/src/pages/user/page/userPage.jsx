import React, { Component } from 'react';
import { ModalBody, Modal,Button } from 'react-bootstrap';
import cover from '../common/images/covers-cover.jpg';
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
                    <div className="row mt-5 align-items-center">
                <div className="col-md-3 text-center mb-5">
                  <div className="avatar avatar-xl">
                    <img src={cover} alt="..." className="avatar-img rounded-circle"/>
                  </div>
                </div>
                <div className="col">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <h4 className="mb-1 labelGradient">Brown, Asher</h4>
                      <p className="small mb-3"><span className="badge badge-dark">New York, USA</span></p>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-7">
                      <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at, pretium blandit sapien. </p>
                    </div>
                    <div className="col">
                      <p className="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                      <p className="small mb-0 text-muted">P.O. Box 464, 5975 Eget Avenue</p>
                      <p className="small mb-0 text-muted">(537) 315-1481</p>
                    </div>
                  </div>
                </div>
              </div>
                    </div>
                </div>
                {/*ultilities */}
                <div className="container">
                <div className="row my-4">
                    {/* card 1 */}
                <div className="col-md-4">
                  <div className=" mb-4 text-light content__head container">
                    <div className="card-body my-n3">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-lg bg-light">
                            <i className="fe fe-user fe-24 text-primary"></i>
                          </span>
                        </div> 
                        <div className="col">
                          <a href="#">
                            <h3 className="mt-4 mb-1 labelGradient">Personal</h3>
                          </a>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        </div> 
                      </div> 
                      <button className="sign__btn" type="button" onClick={()=>this.infoHandler(true,1)}>Chỉnh sửa thông tin cá nhân</button>
                    </div> 
                    
                  </div> 
                </div> 
                {/* card 2 */}
                <div className="col-md-4">
                  <div className="mb-4 text-light content__head container">
                    <div className="card-body my-n3">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-lg bg-light">
                            <i className="fe fe-shield fe-24 text-primary"></i>
                          </span>
                        </div> 
                        <div className="col">
                          <a href="#">
                            <h3 className=" mt-4 mb-1 labelGradient">Security</h3>
                          </a>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        </div> 
                      </div> 
                      <button className="sign__btn" type="button" onClick={()=>this.infoHandler(true,2)}>Thay đổi mật khẩu</button>
                    </div>

                  </div> 
                </div>

                {/* card 3 */}
                <div className="col-md-4">
                  <div className="mb-4 text-light content__head container">
                    <div className="card-body my-n3">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-lg bg-light">
                            <i className="fe fe-bell fe-24 text-primary"></i>
                          </span>
                        </div> 
                        <div className="col">
                          <a href="#">
                            <h3 className="labelGradient mt-4 mb-1">Notifications</h3>
                          </a>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
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
                <Modal.Body className="homecolor ">
                    <div className="row">
                    {/*  */}
                    
                    </div>
                     
                    <div className="section--bg homecolor">
                   
                        <div className="container">
                       
                            <div className="row">
                            <button className="float-right text-right labelGradient h2 " onClick={()=>this.infoHandler(false,3)}>x</button>
                            
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                    <div className="">
                                    {this.renderSwitch(this.state.tabType)}
                                    </div>

                                   
                                    
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
                <h3 className="text-white mb-4">Chỉnh thông tin cá nhân</h3>
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
        <h3 className="text-white mt-4 mb-4">Thay đổi mât khẩu</h3>
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
        return ( 
          <div>
            <ul className="nav nav-tabs content__tabs border-0" id="content__tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Bình luận</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Đánh giá</a>
							</li>
              
						</ul>
            <div className="tab-content mt-5" id="myTabContent">
							<div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                {/*  */}
                    <li className="comments__item">
                  <div className="comments__autor">
                  <img className="reviews__avatar" src="images/img-user.svg" alt=""/>
                    <span className="comments__name">John Doe</span>
                    <span className="comments__time">30.08.2018, 17:53</span>
                  </div>
                  <p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                  <div className="comments__actions">

                    <button type="button"><i className="icon ion-ios-trash"></i>Xóa</button>

                  </div>
                </li>
							</div>
							<div className="tab-pane fade " id="tab-2" role="tabpanel" aria-labelledby="2-tab">
							{/* Hey listen */}
                  <li className="reviews__item">
                <div className="reviews__autor">

                  <span className="reviews__name">Best Marvel movie in my opinion</span>
                  <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                  <span className="reviews__rating"><i className="icon ion-ios-star"></i>8.4</span>
                </div>
                <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div className="comments__actions">

                <button type="button"><i className="icon ion-ios-trash"></i>Xóa</button>

                </div>
              </li>
							</div>
				
						</div>
          </div>
         );
    }
}


 
export default UserPage;