import React, { Component } from 'react';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { ModalBody, Modal,Button } from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import createtable from '../common/datatable';

class Person extends Component {
    state = { modalState: false, viewFlag: false }

    componentDidMount(){
      createtable();
      }
      
    setModalState=(addModal)=>{
        this.setState({viewFlag: addModal})
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
                <h2 className="mb-2 page-title">People control</h2>
                  <div className="col-md-auto ml-auto text-right">
                    <button type="button" className="btn"><span className="fe fe-refresh-ccw fe-24 text-muted" ></span></button>
                    <button type="button" className="btn" onClick={()=>this.setModalState(false)}><span className="fe fe-plus fe-24 text-muted text-primary" ></span></button>
                  </div>
                </div>
              <div className="row my-4">
    
                <div className="col-md-12">
                  <div className="card shadow">
                    <div className="card-body">
    
                    <table className="table datatables display">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Country</th>
                            <th>Birth date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>368</td>
                            <td>
                              <div className="avatar avatar-md">
                                <img src="./assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0 text-muted"><strong>Brown, Asher D.</strong></p>
                              <small className="mb-0 text-muted">2474</small>
                            </td>
                            <td>
                              Actor
                            </td>
                            <td>
                              USA
                            </td>
                            <td className="text-muted">13/09/2020</td>

                            <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="text-muted sr-only">Action</span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item text-warning pointercursor" onClick={()=>this.setModalState(true)}>Edit</a>
                                <a className="dropdown-item text-danger pointercursor"onClick={()=>this.removeConfirm(1)}>Disable</a>
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
            <Modal
        size="lg"
        show={this.state.modalState}
        onHide={this.setModalState}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
              Person's details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <PersonDetail viewDetails={this.state.viewFlag}/>
        </Modal.Body>
      </Modal>
      {/* Dialog remove */}
      <Dialog ref={(el) => { this.dialog = el }} />
        </div>
        );
    }
}
class PersonDetail extends Component {
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
        return ( 
            <form>
            <fieldset disabled={this.state.viewDetails}>
            <div className="form-group">
              <label >Movie's Name</label>
              <input name="name" className="form-control" placeholder="Enter the name" required/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label >Birthday</label>
                <input className="form-control" name="birthDate" type="date" name="date"/>
              </div>
              <div className="form-group col-md-6">
              <label for="inputCity">Country</label>
                    <input type="text" className="form-control" name="bornIn"/>
              </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                  <label >Poster</label>
                  <input type="file" className="form-control-file" name="poster"/>
                </div>

                <div className="form-group col-md-6">
                <label for="inputAddress2">Photo</label>
              <input type="file" name="photo" className="form-control-file" multiple/>  

                </div>
            </div>
            <div className="form-group">
            <label >Role</label>
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
          </form>
            );
    }
}
 
export default Person;