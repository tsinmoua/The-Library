import React from "react";
import Navbar from "../components/Navbar"
import error from "../assets/images/404.png"
import warning from "../assets/images/warning.png"

function NoMatch() {
    return (
        <>
            <Navbar />

            <div className="jumbotron">
                <span>
                    <img src={warning} alt="warning" style={{ height: "6rem" }} />
                </span>
                <span>
                    <img src={error} alt="error" />
                </span>
                <h1 className="display-1">Page Not Found</h1>
                <h2 className="display-4">Please redirect to a valid page</h2>
            </div>
        </>
    );
}

export default NoMatch;
