import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Comment extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.comment.id === this.props.comment.id) {
      return false
    }

    return true
  }

  render() {
    const { comment } = this.props

    return (
      <TransitionGroup
        className="card overflow-hidden"
        style={{ height: '96px' }}
      >
        <CSSTransition classNames="slide" timeout={500} key={comment.id}>
          <div className="card-body d-flex p-3 shadow-sm">
            <div className="mr-2">
              <img
                src={comment.from.picture.data.url}
                alt="x"
                className="img-fluid rounded-circle mx-auto d-block"
              />
            </div>
            <div className="text-truncate">
              <h5 className="text-primary text-bold">{comment.from.name}</h5>
              <span>{comment.message}</span>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Comment
