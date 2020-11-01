import React, { Component,useState } from 'react';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { ModalBody, Modal,Button } from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import createtable from '../common/datatable';
class Movies extends Component {
    state = { modalState: false,modalType: 0, viewFlag: false}

    componentDidMount(){
      createtable();
    }

    reload(){
      // Reload something
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
            <h2 className="mb-2 page-title">Movies control</h2>
              <div className="col-md-auto ml-auto text-right">
                <button type="button" className="btn"><span className="fe fe-refresh-ccw fe-24 text-muted" ></span></button>
                <button type="button" className="btn" onClick={()=>this.setModalState(0, false)}><span className="fe fe-plus fe-24 text-muted text-primary" ></span></button>
              </div>
            </div>
          <div className="row my-4">

            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">

                  <table className="table datatables display" >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>lemonScore</th>
                        <th>UserScore</th>
                        <th>Update Date</th>
                        <th>Action</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>368</td>
                        <td>Vinamilk: Rise of Dutch Lady </td>
                        <td>A Legendairy fight</td>
                        <td>2.5/5 (Average)</td>
                        <td>2.5/5 (Average)</td>
                        <td>2.5/5 (Average)</td>
                        <td>--</td>
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
              {this.state.modalType === 0 ? "Movie's Detail" : "Activities's Detail"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.modalType === 0 ? <MoviesDetails viewDetails={this.state.viewFlag}/> : <ReviewModal/>}
        </Modal.Body>
      </Modal>
      {/* Dialog remove */}
      <Dialog ref={(el) => { this.dialog = el }} />
      </div> );
    }
}

class ReviewModal extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
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
      </div>
     );
  }
}



class MoviesDetails extends Component {
 
  state = { viewDetails: true, Datepick: new Date }
  
  constructor(props)
  {super(props);
    this.state.viewDetails = this.props.viewDetails;
    console.log(this.props.viewDetails)
  }
  toEdit(){
    this.state.viewDetails===false? this.setState({viewDetails: true}): this.setState({viewDetails: false})
  }

  render() { 
    return ( 
      
      <form >
        <fieldset disabled={this.state.viewDetails}>
          <div className="form-group">
              <label >Movie's Name</label>
              <input name="name" className="form-control" placeholder="Enter the name" required/>
          </div>
          <div className="form-group">
              <label >Description</label>
              <input name="summary" className="form-control" placeholder="Enter the descript (summary)"/>
          </div>

          <div className="form-row">
              <div className="form-group col-md-6">
                  <label>Release year</label>
                  <input name="date" className="form-control" type="date" name="date"/>

              </div>
              <div className="form-group col-md-6">
                <label for="Trailerlink">Rating</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter rating" aria-label="ratingInput" aria-describedby="basic-addon2"/>
                  <div className="input-group-append">
                    <span className="input-group-text">/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label >User Score</label>
                <div className="input-group mb-3">
                  <input name="userScore" type="text" className="form-control" placeholder="Enter rating" aria-label="ratingInput" aria-describedby="basic-addon2"/>
                  <div className="input-group-append">
                    <span className="input-group-text">/5</span>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label>Lemon Score</label>
                <div className="input-group mb-3">
                  <input name="lemonScore" type="text" className="form-control" placeholder="Enter rating" aria-label="ratingInput" aria-describedby="basic-addon2"/>
                  <div className="input-group-append">
                    <span className="input-group-text">/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label >Genres</label>
                <div className="input-group mb-3">
                  <input name="genres" type="text" className="form-control" placeholder="Enter genres"/>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label>Studio</label>
                <div className="input-group mb-3">
                  <input name="studio" type="text" className="form-control" placeholder="Enter studio"/>
                </div>
              </div>
            </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail">Poster</label>
              <input type="file" name="poster" className="form-control-file"/>
            </div>
            <div className="form-group col-md-6">
              <label for="Trailerlink">Trailer</label>
              <input type="password" className="form-control" name="trailer" placeholder="Enter trailer link"/>
            </div>
          </div>
          <div className="form-group">
              <label for="inputEmail">Director(s):</label>
              <table className="table table-borderles">
              <thead>
                  <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th className="w-25">Bio</th>
                  <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>

                  <td>
                      <div className="avatar avatar-md">
                      <img src="./assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                      </div>
                  </td>
                  <td>
                      <p className="mb-0 text-muted"><strong>Brown, Asher D.</strong></p>
                      <small className="mb-0 text-muted">2474</small>
                  </td>
                  <td className="w-25"><small className="text-muted"> Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus.</small></td>

                  <td>
                      <a className="text-danger" href="#" hidden={this.state.viewDetails}>Remove</a>
                  </td>
                  </tr>
                  
              </tbody>
              </table>

              <a className="text-primary" href="#" hidden={this.state.viewDetails}>Add director</a>
          </div>
          <div className="form-group">
            <label for="inputEmail">Actor(s)/Actress(es):</label>
            <table className="table table-borderles">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th className="w-25">Bio</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                <td>
                    <div className="avatar avatar-md">
                    <img src="./assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                    </div>
                </td>
                <td>
                    <p className="mb-0 text-muted"><strong>Brown, Asher D.</strong></p>
                    <small className="mb-0 text-muted">2474</small>
                </td>
                <td className="w-25"><small className="text-muted"> Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus.</small></td>

                <td>
                    <a className="text-danger" href="#" hidden={this.state.viewDetails}>Remove</a>
                </td>
                </tr>
                
            </tbody>
            </table>

            <a className="text-primary" href="#" hidden={this.state.viewDetails}>Add Actor</a>
        </div>
        </fieldset>
          {this.state.viewDetails===true?<button type="submit" className="btn btn-warning text-light" onClick={()=>this.toEdit()}>Edit</button>:<button type="submit" className="btn btn-primary">Add</button>}
          {this.state.viewDetails===true?<button type="submit" className="btn btn-danger" onClick={()=>this.toEdit()}>Disable</button>:<button type="submit" className="btn btn-danger">Cancel</button>}
        </form>

     );
  }
}

 
 
export default Movies;