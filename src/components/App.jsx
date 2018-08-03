import React, { Component } from 'react'

import { Provider } from './Context'
import config, { TITLE_POLL } from '../config'
import Reaction from './Reaction'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="wrapper d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card mb-4">
                  <div className="card-body p-3 shadow-sm">
                    <h1 className="text-center text-muted m-0">{TITLE_POLL}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {config.map(x => (
                <div className="col-md-4 mb-4" key={x.REACTION_TYPE}>
                  <Reaction config={x} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
