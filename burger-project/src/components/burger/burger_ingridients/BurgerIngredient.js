import React from 'react'
import './BurgerIngredient.css'
const burgerIngredient = (props) => {
    let ingredient = null
    switch (props.type) {
        case ('bread -bottom'):
            ingredient = <div className='BreadBottom' ></div>
            break;
        case ('bread-bottom'):
            ingredient = <div className='BreadTop' >
                <div className='Seeds1'></div>
                <div className='Seeds2'></div>
            </div>
            break;
        case ('meat'):
            ingredient = <div className='Meat' ></div>
            break;
        case ('cheese'):
            ingredient = <div className='Cheese' ></div>
            break;
        case ('beacon'):
            ingredient = <div className='Beacon' ></div>
            break;
        case ('salad'):
            ingredient = <div className='Salad' ></div>
            break;
        default:
            ingredient = null
            break;
    }
}
export default burgerIngredient