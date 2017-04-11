import React, {Component} from 'react'
import {css} from 'glamor'
import fetch from 'isomorphic-unfetch'

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
  minWidth: 106,
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
      message: null
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()
    const email = this.refs.email.value

    if (!email) {
      this.setState({message: 'Bitte geben Sie eine E-Mail Adresse an.'})
      return
    }

    this.setState({ loading: true })

    fetch(`/newsletter/subscribe?email=${encodeURIComponent(email)}`, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(data => {
        this.setState({message: data.message, loading: false})
        if (data.success) {
          this.refs.email.value = ''
        }
      })
      .catch(e => {
        this.setState({
          message: 'Unerwarteter Fehler, bitte versuchen Sie es später nochmals.',
          loading: false
        })
      })
  }

  render () {
    const { loading, message } = this.state

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
        {!!message && <p>{message}</p>}
      </form>
    )
  }
}

export default Newsletter
