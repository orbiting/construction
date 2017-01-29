import React, {Component} from 'react'
import {css} from 'glamor'

const fieldStyle = css({
  verticalAlign: 'bottom',
  color: '#444',
  padding: '10px 20px 10px 20px',
  border: 'solid #444 1px',
  textDecoration: 'none',
  backgroundColor: 'white',
  fontSize: 14,
  height: 37,
  boxSizing: 'border-box'
})
const inputStyle = css({
  width: 211,
  marginRight: 6
})
const buttonStyle = css({
  width: 110,
  ':hover': {
    background: '#444',
    color: 'white'
  }
})

class Newsletter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      messages: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()
    const email = this.refs.email.value

    if (!email) {
      this.setState({
        messages: [
          'Bitte geben Sie eine E-Mail Adresse an.'
        ]
      })
      return
    }

    this.setState({ loading: true })
    const lang = navigator.language.substring(0, 2)

    const formData = { email, lang }

    const xhr = new window.XMLHttpRequest()
    xhr.open('post', '/api/subscribe')
    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
    xhr.addEventListener('load', () => {
      let nextState = {
        loading: false
      }
      if (xhr.status === 200) {
        nextState.messages = ['Bitte bestätigen Sie die E-Mail, die wir Ihnen geschickt haben.']
      } else {
        const error = xhr.response.error ? xhr.response.error : 'Unbekannter Fehler'
        nextState.messages = [error]
      }
      this.setState(nextState)
    })
    xhr.send(JSON.stringify(formData))
  }

  render () {
    const { loading, messages } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <input type='email' name='email' ref='email' placeholder='E-Mail' {...fieldStyle} {...inputStyle} />
          { loading
            ? '...'
            : <button type='submit' {...fieldStyle} {...buttonStyle}>Anmelden</button> }
        </p>
        <ul>
          {messages.map((msg, i) => <li key={i}>{msg}</li>)}
        </ul>
      </form>
    )
  }
}

export default Newsletter
