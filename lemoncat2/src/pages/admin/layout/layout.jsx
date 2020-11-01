import React, { Component } from 'react';
// Css
import "../common/css/simplebar.css"
import "../common/css/dataTables.bootstrap4.css"
import "../common/css/feather.css"
import "../common/css/select2.css"
import "../common/css/dropzone.css"
import "../common/css/uppy.min.css"
import "../common/css/jquery.steps.css"
import "../common/css/jquery.timepicker.css"
import "../common/css/quill.snow.css"
import "../common/css/daterangepicker.css"
import "../common/css/app-light.css";
import "../common/css/costumecss.css"; 

import 'bootstrap/dist/js/bootstrap.js';
import Dialog from 'react-bootstrap-dialog';
import SibeBar from './sidebar';
import routes from"../common/route"
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

class AdminPage extends Component {
    state = { collapsed: false }
    logOutConfirm=()=>{
        this.dialog.show({
          title: 'Confimation',
          body: 'Are you want to logout?',
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

    openAndCloseSibebar=()=>{
        console.log("openAndCloseSibebar")
        this.state.collapsed === true ? this.setState({collapsed: false}): this.setState({collapsed: true})
        console.log(this.state.collapsed)
    }
    render() { 
        return ( 

            <div className={this.state.collapsed===false ? "vertical light" : "vertical light collapsed" }>
                <div className="wrapper">
                <nav className="topnav navbar navbar-light">
                    <button type="button" className="navbar-toggler text-muted mt-2 p-0 mr-3" onClick={this.openAndCloseSibebar}>
                    <i className="fe fe-menu navbar-toggler-icon"  ></i>
                    </button>
                    <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-muted my-2 pointercursor" id="modeSwitcher" data-mode="light">
                        <i className="fe fe-sun fe-16"></i>
                        </a>
                    </li>
                    <li className="nav-item nav-notif">
                        <a className="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-notif">
                        <span className="fe fe-bell fe-16"></span>
                        <span className="dot dot-md bg-success"></span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="avatar avatar-sm mt-2">
                            <img src="" alt="..." className="avatar-img rounded-circle"/>
                        </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" onClick={()=>this.logOutConfirm()} >Log Out</a>
                        </div>
                    </li>
                    </ul>
                    </nav>
                    <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
                    <a href="#" className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" onClick={this.openAndCloseSibebar}>
                    <i className="fe fe-x"><span className="sr-only"></span></i>
                    </a>

                    <SibeBar/>
                    </aside>
                    <main role="main" className="main-content">
                    <div className="container-fluid">

                            <Switch>
                            {routes.map((route,idx)=>{
                                return route.component ? (       //toan tu 3 ngoi
                                    <Route 
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        component={route.component}
                                    />
                                ):null;
                            })
                            }
                        <Redirect exact to="/admin/"/> 
                        </Switch>
                     
                    </div>
                    </main>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>   );
    }
}
 
export default AdminPage;