import React from "react";

const ProgressBar = (props)=>{
    const {color, percentage} = props;

    return (
    <div className="progress-container">
        <div>
        <span className="progress-label">{`${percentage}%`}</span>
        </div>
        
    </div>
    )
}

export default ProgressBar;