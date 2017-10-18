import React from 'react'
import firebase from '../libs/firebase'

class Data extends React.Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const fb = await firebase()
    const database = fb.database().ref('/users').on('value', snapshot => {
      let data = snapshot.val()
      const newUsers = Object.keys(data).map(key => data[key])
      this.setState({
        users: newUsers
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul className="list-group">
          {
            this.state.users.map(user => (
              <li className="list-group-item">{`${user.name} ${user.surname}`}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Data
