import React, { Component } from 'react'

import { Provider } from './Context'

class App extends Component {
  render() {
    return (
      <Provider>
        <div>App</div>
      </Provider>
    )
  }
}

export default App
