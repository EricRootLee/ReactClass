import React from 'react'
import './Controls.css'
const controls =  (props) => {
    return (
        <div className="BuildControl">
            <button className="Label">{props.item_label}</button>
            <button className="Less">Less</button>
            <button className="More">More</button>
        </div>
    );
}

export default controls