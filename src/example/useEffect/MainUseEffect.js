import React from 'react'
import UseEffect from './UseEffect'

function MainUseEffect() {
    const [toggle, setToggle] = React.useState(true)
  const [count, setCount] = React.useState(0)

  const appToggle = () => {
    setToggle(!toggle)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="newApp">
    <h2>React Hook - useEffect</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={appToggle}>Toggle component</button>
    {
      toggle ? (
        <UseEffect counter={count}/>
      ):''
    }
   </div>
  )
}

export default MainUseEffect