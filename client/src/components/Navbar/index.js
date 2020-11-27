import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import books from "../../assets/images/books.png"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="navbar-brand">
                <img src={books} width="30" height="30" className="d-inline-block align-top" alt="Books" loading="lazy" />
                    The Library
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fl" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/saved">Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
