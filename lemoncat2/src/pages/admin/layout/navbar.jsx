import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }

    

    render() { 
        return ( 
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
                    <img src="https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg" alt="..." className="avatar-img rounded-circle"/>
                </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" onClick={()=>this.logOutConfirm()} >Log Out</a>
                </div>
            </li>
            </ul>
            </nav>
        );
    }
}
 
export default Navbar ;