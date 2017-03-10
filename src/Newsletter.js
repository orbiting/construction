import React, {Component} from 'react'
import {css} from 'glamor'

const formStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 400,
  width: '100%',
  '& input[type=email], & input[type=text]': {
    width: 'auto',
    flexGrow: 2,
    minWidth: 0
  },
  '& input[type=submit], & button': {
    marginLeft: 8,
    width: 'auto',
    flexGrow: 1
  }
})
const fieldStyle = css({
  appearance: 'none',
  borderRadius: 0,
  verticalAlign: 'bottom',
  color: '#444',
  padding: '10px 20px 10px 20px',
  border: 'solid #444 1px',
  textDecoration: 'none',
  backgroundColor: 'white',
  fontSize: 14,
  height: 37,
  ':focus': {
    outline: 'none'
  }
})
const buttonStyle = css({
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
        <p {...formStyle}>
          <input {...fieldStyle}
            type='email'
            name='email'
            ref='email'
            placeholder='E-Mail-Adresse' />
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
