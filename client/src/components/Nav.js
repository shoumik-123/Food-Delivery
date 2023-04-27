import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-dark p-2" >

            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark!important">
                <div className="container-fluid bg-dark">
                    <Link className="navbar-brand text-light" to="/">
                        <img className="logo" src="https://w7.pngwing.com/pngs/985/991/png-transparent-foodpanda-online-food-ordering-food-delivery-restaurant-others-miscellaneous-white-face-thumbnail.png"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;