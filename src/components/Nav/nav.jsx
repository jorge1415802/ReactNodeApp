import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">React Node App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mx-2">
                        <li className="nav-item mx-2">
                            <Link to='/register'>Register Now</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/otro'>Otro</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
                </nav>
                <br></br>
            </div>
        )
    }
}