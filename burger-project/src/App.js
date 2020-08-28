
import Layout from './components/layout/Layout';
import React, { Component } from 'react'
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}
export default App;
