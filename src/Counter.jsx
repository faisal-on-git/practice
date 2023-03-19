// import React from 'react'

// const Counter = (props) => {

//     // const [count, setCount] = React.useState(0)

//     // const increment = () => {
//     //     setCount(count + 1)
//     // }
//     console.log(props)
//   return (

//     <div><div>{props.count}</div>
//   <button onClick={props.increment()}>Increment</button>
//     </div>
    
//   )
// }

// export default Counter

import React, { Component } from 'react'

export class Counter extends Component {
   
  
  render() {
    return (
        <div><div>{this.props.count}</div>
          <button onClick={this.props.increment()}>Increment</button>
            </div>
    )
  }
}

export default Counter