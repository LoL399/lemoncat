import React, { Component } from 'react';
 
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { Modal } from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import createtable from '../common/datatable';

class UserInfo extends Component {
    state = { modalState: false,modalType: 0, viewFlag: false}

    componentDidMount(){
      createtable();
    }

    setModalState=(type,addModal)=>{
      this.setState({viewFlag: addModal})
      this.setState({modalType: type})
      this.state.modalState===false ? this.setState({modalState: true}) : this.setState({modalState: false})
    }

    removeConfirm=id=>{
      this.dialog.show({
        title: 'Confimation',
        body: 'Are you want to delete this major?',
        actions: [
          Dialog.CancelAction(),
          Dialog.OKAction(() => {
          })
        ],
        bsSize: 'small',
        onHide: (dialog) => {
          dialog.hide()
          console.log('closed by clicking background.')
        }
      })
      
    }
    render() { 
        return ( 
            
            <div className="row justify-content-center">
        <div className="col-12">
          <div className="row mb-4 items-align-center">
            <h2 className="mb-2 page-title">User's info control</h2>
              <div className="col-md-auto ml-auto text-right">
                <button type="button" className="btn"><span className="fe fe-refresh-ccw fe-24 text-muted" ></span></button>
                <button type="button" className="btn" onClick={()=>this.setModalState(0, false)}><span className="fe fe-plus fe-24 text-muted text-primary" ></span></button>
              </div>
            </div>
          <div className="row my-4">

            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                    
                <table className="table datatables display ">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            
                            <th>Address</th>
                            <th>City</th>
                            <th>Date</th>
                            <th>Rank</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>368</td>
                            <td>Imani Lara</td>
                            <td>(478) 446-9234</td>
                            <td>AAA@Yahoo.bing</td>
                            <td>9022 Suspendisse Rd.</td>
                            <td>High Wycombe</td>
                            <td>Jun 8, 2019</td>
                            <td>Admin</td>
                            
                            <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="text-muted sr-only">Action</span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item text-warning pointercursor" onClick={()=>this.setModalState(0, true)}>Edit</a>
                                <a className="dropdown-item text-danger pointercursor" onClick={()=>this.removeConfirm(1)}>Disable</a>
                                <a className="dropdown-item text-primary pointercursor" onClick={()=>this.setModalState(1,false)}>Activities</a>
                              </div>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                  
                </div>
              </div>
            </div> 
          </div> 
        </div> 
        {/*  */}
      <Modal
        size="lg"
        show={this.state.modalState}
        onHide={this.setModalState}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
              {this.state.modalType === 0 ? "User's Detail" : "Activities's Detail"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.modalType === 0 ? <UserDetail viewDetails={this.state.viewFlag}/> : <ActivitiesDetail/>}
        </Modal.Body>
      </Modal>
      {/* Dialog remove */}
      <Dialog ref={(el) => { this.dialog = el }} />
      </div>
        
        );
    }
}
class UserDetail extends Component {
  state = { viewDetails: true }
  constructor(props)
  {super(props);
    this.state.viewDetails = this.props.viewDetails;
    console.log(this.props.viewDetails)
  }

  toEdit(){
    this.state.viewDetails===false? this.setState({viewDetails: true}): this.setState({viewDetails: false})
  }
    render() { 
        return ( <form>
          <fieldset disabled={this.state.viewDetails}>

                <div className="form-group">
                    <label >User's Name</label>
                    <input name="name" className="form-control" placeholder="Enter the name" required/>
                </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                      </div>
                    </div>
                    <div className="form-row">
                      < div className="form-group col-md-6">
                        <label for="inputEmail">Photo</label>
                        <input type="file" name="photo" className="form-control-file"/>
                      </div>
                        <div className="form-group col-md-6">
                         
                      <label for="inputAddress2">Phone</label>
                      <input type="text" className="form-control" name="phone" placeholder=" Phone number"/>
                        </div>
                      </div>
                      <div className="form-group ">
                        <label >Role </label>
                        <select className="custom-select" name="role">
                            <option selected="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                      </div>

            </fieldset>
            {this.state.viewDetails===true?<button type="submit" className="btn btn-warning text-light" onClick={()=>this.toEdit()}>Edit</button>:<button type="submit" className="btn btn-primary">Add</button>}
            {this.state.viewDetails===true?<button type="submit" className="btn btn-danger" onClick={()=>this.toEdit()}>Disable</button>:<button type="submit" className="btn btn-danger">Cancel</button>}


        </form> );
    }
}

class ActivitiesDetail  extends Component {
    state = { ActivitiesState: 0 }

    changeActivity(id){
      this.setState({ActivitiesState: id});
    }
    renderSwitch(id){
      switch(id) {
        case 1:
          return <CommentDetail/>;
        default:
          return <ReviewDetail/>;
      }
    }

    render() { 
        return ( 
            <div>
                <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <span className="nav-link active pointercursor"  data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true" onClick={()=>this.changeActivity(0)} >Reviews</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link pointercursor" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="false" onClick={()=>this.changeActivity(1)} >Comment</span>
                    </li>
                </ul>
                
                <div className="tab-content mb-1" id="pills-tabContent">
                    {this.renderSwitch(this.state.ActivitiesState)}
                </div>
            </div>
         );
    }
}


class ReviewDetail extends Component {
    state = {  }
    render() { 
        return ( <div>
          <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <span className="circle circle-lg bg-light">
                          <i className="fe fe-user fe-24 text-primary"></i>
                        </span>
                      </div>
                      <div className="col">
                        <div>
                          <h3 className="h5 mt-4 mb-1">This movie is so such</h3>
                          <small>12/12/2019</small>
                        </div>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        
                        <p className="text-warning">Rating: 2/5</p>
                        <a href="#"><small>by Mr.Dat</small></a>
                        <p href="#" className="text-danger text-right"><small>Remove</small></p>
                        <hr/>
                      </div> 
                  </div>
        </div>  );
    }
}

class CommentDetail extends Component {
    state = {  }
    render() { 
        return ( <div>
          <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <span className="circle circle-lg bg-light">
                          <i className="fe fe-user fe-24 text-primary"></i>
                        </span>
                      </div>
                      <div className="col">
                        <div>
                          <h3 className="h5 mt-4 mb-1">This movie is so such</h3>
                          <small>12/12/2019</small>
                        </div>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus.</p>
                        <a href="#"><small>by Mr.Dat</small></a>
                        <p href="#" className="text-danger text-right"><small>Remove</small></p>
                        <hr/>
                      </div> 
                  </div>
        </div>);
    }
}
 
export default UserInfo;