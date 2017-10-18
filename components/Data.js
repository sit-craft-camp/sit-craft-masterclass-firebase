import React from 'react'
import firebase from '../libs/firebase'

class Data extends React.Component {
  state = {
    users: []
  }

  render() {
    return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Vestibulum at eros</li>
        <li className="list-group-item">Vestibulum at eros</li>
        <li className="list-group-item">Vestibulum at eros</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>)
  }
}

export default Data
