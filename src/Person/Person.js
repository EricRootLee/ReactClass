import React from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click} >Hello I am {props.name} and am {props.age} year old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} type="text" value={props.name}/>
        </div>
    )
}
export default person