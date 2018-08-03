import React, { Component, Fragment } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Consumer, requestTo } from './Context'

class Reaction extends Component {
  state = {
    img: ''
  }

  componentDidMount() {
    this.getImage()
  }

  getImage = () => {
    const { REACTION_TYPE } = this.props.config
    const imgPath = `/images/${REACTION_TYPE}`

    requestTo(imgPath, 'Đã có lỗi xảy ra éc éc...', data => {
      if (data.length === 0)
        return console.warn(`Không tìm thấy ảnh nào trong thư mục ${imgPath}`)

      this.setState({ img: data[0] })
    })
  }

  render() {
    const { img } = this.state
    const { REACTION_TYPE, REACTION_TITLE } = this.props.config

    return (
      <Fragment>
        <div className="card rounded-bottom overflow-hidden">
          <img
            src={`/images/${REACTION_TYPE}/${img}`}
            className="card-img-top rounded-bottom"
            alt={REACTION_TYPE}
          />
          <h5 className="h3 card-title position-absolute text-white w-100 p-1 text-center m-0 rounded-bottom title-reaction-text">
            {REACTION_TITLE}
          </h5>
        </div>
        <div className="card mt-2">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`/images/reactions/${REACTION_TYPE}.gif`}
                  className="ml-2 react-img"
                  alt={REACTION_TYPE}
                />
              </div>
              <div className="col-md-8">
                <div className="h-100 d-flex align-items-center">
                  <Consumer>
                    {({ reaction }) => (
                      <TransitionGroup className="h2 m-0 text-muted position-relative overflow-hidden">
                        <CSSTransition
                          key={reaction[REACTION_TYPE]}
                          classNames="transform-text"
                          timeout={500}
                        >
                          <span className="d-block">
                            {Number(reaction[REACTION_TYPE]).toLocaleString()}
                          </span>
                        </CSSTransition>
                      </TransitionGroup>
                    )}
                  </Consumer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Reaction
