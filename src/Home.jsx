import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export class Home extends Component {


  render() {
    const handleNavigation = () => {
        this.props.history.push('/about')
    }
    return (
      <button onClick={handleNavigation}>Home</button>
    )
  }
}

export default withRouter(Home)