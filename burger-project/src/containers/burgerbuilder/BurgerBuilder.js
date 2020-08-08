import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>

                <Burger />

                <div>
                    Burger Controls
                </div>
            </Aux>
        )
    }
}
export default BurgerBuilder