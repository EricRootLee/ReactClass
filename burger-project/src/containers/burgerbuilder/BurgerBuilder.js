import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/Burger'
import BuildControls from '../../components/burger/build_controls/BuildControls'

const INGREDIENTS_PRICE = 4

class BurgerBuilder extends Component {

    state = {
        ingredients:
        {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 100
    }


    addIngredients(type) {
        const oldCount = this.state.ingredients[type]
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounted
    }

    removeIngredients() {

    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>
                    <BuildControls />
                </div>
            </Aux>
        )
    }
}
export default BurgerBuilder