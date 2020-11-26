import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card mb-3" {...props}>
            <div className="row no-gutters">

                <div className="col-md-3">
                    <img src={props.src} className="card-img" alt={props.alt} />
                </div>

                <div className="col-md-9">
                    <div className="row">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}
                                <span>
                                    <button name="view" onClick={props.onClick}>View</button>
                                    <button name="save" onClick={props.onClick}>Save</button>
                                </span>
                            </h5>
                            <h6 className="card-title">By: {props.authors}</h6>

                        </div>

                        <div className="card-body">
                            <div className="row">
                                <p className="card-text">{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;
