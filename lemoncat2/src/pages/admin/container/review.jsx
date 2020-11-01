import React, { Component } from 'react';
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import { ModalBody, Modal,Button } from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import { Editor } from '@tinymce/tinymce-react';
import createtable from '../common/datatable';
class Review extends Component {
    state = { modalState: false,modalType: 0, viewFlag: false }

    componentDidMount(){
      createtable()
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
            <h2 className="mb-2 page-title">Review control</h2>
              <div className="col-md-auto ml-auto text-right">
                <button type="button" className="btn"><span className="fe fe-refresh-ccw fe-24 text-muted" ></span></button>
                <button type="button" className="btn" onClick={()=>this.setModalState(0, false)}><span className="fe fe-plus fe-24 text-muted text-primary" ></span></button>
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
                            <th>Rating</th>
                            <th>Rate by</th>
                            <th>Movie</th>
                            <th>Action</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>

                            <td>368</td>
                            <td>2.5/5 (Average)</td>
                            <td>Donald Trump</td>
                            
                            <td>Vinamilk: Rise of Dutch Lady </td>


                            <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="text-muted sr-only">Action</span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item text-warning pointercursor" onClick={()=>this.setModalState(0, true)}>Edit</a>
                                <a className="dropdown-item text-danger pointercursor"  onClick={()=>this.removeConfirm(1)}>Remove review</a>
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
              Review's Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.state.modalType === 0 ? <ReviewModal viewDetails={this.state.viewFlag}/>    : <CommentModal/>}
             
        </Modal.Body>
      </Modal>
      {/* Dialog remove */}
      <Dialog ref={(el) => { this.dialog = el }} />
      </div>
         );
    }
}
class CommentModal extends Component {
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

class ReviewModal extends Component {
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
            <div className="form-row">
              <div className="form-group col-md-6">
                <label >Movie's title </label>
                <select className="custom-select" name="forMovie">
                    <option selected="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
              </div>
              <div className="form-group col-md-6">
                <label>Reviewer: </label>
                <select className="custom-select" name="byUser">
                    <option selected="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
              </div>
            </div>
               
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Header</label>
                    <input type="email" className="form-control" name="header" placeholder="Enter the head description"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Rating</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Enter rating" name="totalScore" aria-label="ratingInput" aria-describedby="basic-addon2"/>
                      <div className="input-group-append">
                        <span className="input-group-text">/5</span>
                      </div>
                    </div>
                  </div>
            </div>

            <div className="form-group mb-3">
                <label for="example-textarea">Review:</label>
                <div className="ql-container ql-snow" >
                <Editor
                    disabled={this.state.viewDetails}
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }}
                />
                </div>
 

            </div>
              </fieldset>
              {this.state.viewDetails===true?<button type="submit" className="btn btn-warning text-light" onClick={()=>this.toEdit()}>Edit</button>:<button type="submit" className="btn btn-primary">Add</button>}
          {this.state.viewDetails===true?<button type="submit" className="btn btn-danger" onClick={()=>this.toEdit()}>Disable</button>:<button type="submit" className="btn btn-danger">Cancel</button>}

 
          </form> );
    }
}

export default Review;