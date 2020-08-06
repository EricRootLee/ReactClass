import React from 'react'

const person = (props) => {
    return (
        <div>

            <p>Hello I am {props.name} and am {props.age} year old</p>
            <p>{props.children}</p>

        </div>
    )

}

export default person