import React from "react";

function SuccessAlert(props) {
    return (
        <div className="alert alert-success" id={`success-alert${props.alertnumber}`} style={{display:"none"}} {...props}>
            <strong>Success! </strong> {props.title} has been saved.
        </div>
    )
}

function DangerAlert(props) {
    return (
        <div className="alert alert-danger" id={`danger-alert${props.alertnumber}`} style={{display:"none"}} {...props}>
            <strong>Success! </strong> {props.title} has been removed.
        </div>
    )
}

export { SuccessAlert, DangerAlert }
