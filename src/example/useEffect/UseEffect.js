import React from 'react'

function UseEffect(props) {
    React.useEffect(() => {
        console.log('DidMount')
        return()=>{
            console.log('WillUnMOunt')
        }
    },[])

    React.useEffect(() => {
        console.log('render hapenned!!!')
    })

    React.useEffect(() => {
        console.log('new count value is '+props.counter)
        return() => {
            console.log('previous count is '+props.counter)
        }
    },[props.counter])

  return (
    <div>
        <p>Counter: {props.counter}</p>
        
    </div>
  )
}

export default UseEffect