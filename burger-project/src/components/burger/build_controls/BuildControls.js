import React from 'react'
import './Build_controls.css'
import Controls from './controls/Control'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'beacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }

]

const buildControls = () => {
    return (
        <div className="BuildControls">
            {controls.map(ctr => (<Controls  key={ctr.label} item_label={ctr.label} />))}
        </div>
    )
}

export default buildControls