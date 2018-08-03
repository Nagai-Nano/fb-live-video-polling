import React, { Component, createContext } from 'react'
import axios from 'axios'

import {
  ID_POST,
  ACCESS_TOKEN,
  INTERVAL_FOR_REQUEST_COMMENT,
  INTERVAL_FOR_REQUEST_REACTION
} from '../config'

export const requestTo = async (url, errorMessage, fn) => {
  try {
    const res = await axios.get(url)
    const { data } = res

    fn(data)
  } catch (e) {
    console.warn(errorMessage)
  }
}

const BASE_URL = 'https://graph.facebook.com'
const REACTION_ENDPOINT = `${BASE_URL}/${ID_POST}?fields=reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)&access_token=${ACCESS_TOKEN}`
const COMMENT_ENDPOINT = `${BASE_URL}/${ID_POST}/comments?access_token=${ACCESS_TOKEN}&pretty=0&fields=from%7Bname%2Cpicture.width(60).height(60)%7D%2Cmessage&limit=1`
const ERROR_MESSAGE = 'Vui lòng kiểm tra ID_POST hoặc ACCESS_TOKEN'

const Context = createContext()

export class Provider extends Component {
  state = {
    reaction: {
      like: 0,
      haha: 0,
      love: 0,
      wow: 0,
      sad: 0,
      angry: 0
    },
    comment: []
  }

  componentDidMount() {
    this.getTotalReactionCount()
    this.getComment()
  }

  getTotalReactionCount = () => {
    setInterval(() => {
      requestTo(REACTION_ENDPOINT, ERROR_MESSAGE, data =>
        this.setState({
          reaction: {
            like: data.reactions_like.summary.total_count,
            haha: data.reactions_haha.summary.total_count,
            love: data.reactions_love.summary.total_count,
            wow: data.reactions_wow.summary.total_count,
            sad: data.reactions_sad.summary.total_count,
            angry: data.reactions_angry.summary.total_count
          }
        })
      )
    }, INTERVAL_FOR_REQUEST_REACTION)
  }

  getComment = () => {
    let after = ''
    setInterval(() => {
      requestTo(`${COMMENT_ENDPOINT}&after=${after}`, ERROR_MESSAGE, data => {
        if (data.data.length > 0) {
          after = data.paging.cursors.after
          this.setState({
            comment: [...data.data, ...this.state.comment.slice(0, 1)]
          })
        }
      })
    }, INTERVAL_FOR_REQUEST_COMMENT)
  }

  render() {
    const { reaction, comment } = this.state

    return (
      <Context.Provider
        value={{
          reaction,
          comment
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const { Consumer } = Context
