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
                                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                                        <button type="button"
                                            className="btn btn-primary"
                                            name="view">
                                            {props.buttonvalue1}
                                        </button>
                                    </a>
                                    <button type="button"
                                        className="btn btn-secondary"
                                        name="save" onClick={props.onClick}
                                        {...props}>{props.buttonvalue2}
                                    </button>
                                </span>
                            </h5>
                            <h6 className="card-title">{props.authors}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;
