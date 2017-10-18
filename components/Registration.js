import React from 'react'
import firebase from '../libs/firebase'

class Registration extends React.Component {
  state = {
    name: '',
    surname: ''
  }

  onSubmit = async () => {
    const fb = await firebase()
    const database = fb.database().ref('/users').push(this.state)
  }

  render() {
    return (
    <div>
      <div className="form-group">
        <label htmlFor="">Name: {this.state.name}</label>
        <input
          type="text"
          className="form-control"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Surname: {this.state.surname}</label>
        <input
          type="text"
          className="form-control"
          value={this.state.surname}
          onChange={e => this.setState({ surname: e.target.value })}
        />
      </div>
      <button
        className="btn btn-primary btn-block"
        onClick={this.onSubmit}
      >
        Register
      </button>
    </div>)
  }
}

export default Registration
