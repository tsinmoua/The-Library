import React from "react";

function SuccessAlert(props) {
    return (
        <div className="alert alert-success" id={`success-alert${props.alertnumber}`} style={{display:"none"}} {...props}>
            <button type="button" className="close" data-dismiss="alert">x</button>
            <strong>Success! </strong> {props.title} has been saved.
        </div>

    )
}

function DangerAlert(props) {
    return (
        <div class="alert alert-danger" role="alert">
            {props.children}
        </div>
    )
}

export { SuccessAlert, DangerAlert }
