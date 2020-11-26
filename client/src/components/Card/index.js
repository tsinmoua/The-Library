import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
                                    <a href={props.link} target="_blank">
                                        <button type="button" className="btn btn-primary" name="view">View</button>
                                    </a>
                                    <button type="button" className="btn btn-secondary" name="save" onClick={props.onClick}>Save</button>
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
