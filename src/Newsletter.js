import React, {Component} from 'react'

class Newsletter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    const email = this.refs.email.value
    const errors = {}

    if (!email) {
      errors.email = 'Bitte geben Sie eine E-Mail Adresse an.'
    }

    this.setState({ errors })
    if (Object.keys(errors).length) {
      return
    }

    this.setState({ loading: true })
    const lang = navigator.language.substring(0, 2)

    const formData = { email, lang }

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/subscribe');
    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
    xhr.addEventListener('load', () => {
      console.log(xhr.status)
      this.setState({ loading: false })
      if (xhr.status === 200) {
        // success
        this.setState({
          errors: { success: "Bitte bestätigen Sie die E-Mail, die wir Ihnen geschickt haben." }
        })
      } else {
        const error = xhr.response.error ? xhr.response.error : "unknown error"
        this.setState({ fail: error })
      }
    });
    xhr.send(JSON.stringify(formData))
  }

  render() {
    const { loading, errors } = this.state
    const errorMessages = Object.keys(errors).map(key => errors[key])
    const errorClass = key => errors[key] && 'error'

    return (
      <form onSubmit={this.onSubmit}>
        <input type="email" name="email" ref="email" placeholder="E-Mail"/>
        { loading
          ? <img className="wheel" src="wheel.png" />
          : <button type="submit" className="btn">Anmelden</button> }
        <div className="list-errors">
          {errorMessages.map(msg => (
            <div className="list-item" key={msg}>{msg}</div>
          ))}
        </div>
      </form>
    )
  }
}

export default Newsletter
