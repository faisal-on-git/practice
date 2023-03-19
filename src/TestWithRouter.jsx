import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class TestWithRouter extends Component {

  
  render() {
    const handleClick = () => {
        this.props.history.push('/about')
        console.log(this.props)
        // console.log(window.location)
    }
    return (
      <div>TestWithRouter
        <button onClick={handleClick}>Go to About</button>
      </div>
    )
  }
}

export default withRouter(TestWithRouter)