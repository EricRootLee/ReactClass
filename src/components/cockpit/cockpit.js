import React from 'react'

const cockpit = (props) => {
    return (
        <div>
            <p className={props.classes} >This Is Working man</p>
            <div className="Person">
                <button style={props.styles} onClick={props.tooglePersonHandler} >Switch Name</button>
            </div>
        </div>
    )
}

export default cockpit