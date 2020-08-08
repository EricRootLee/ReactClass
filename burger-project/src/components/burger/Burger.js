import React from 'react'
import './Burger.css'
import BurgerIngredient from './burger_ingridients/BurgerIngredient'
const burger = (props) => {
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom' />

        </div>
    )
}

export default burger