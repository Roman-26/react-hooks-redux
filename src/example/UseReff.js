import React from 'react'

export default function UseReff() {
    const [counter, setCounter] = React.useState(0)
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current = 0
  },[])

  const upCounter = () => {
    console.log('counter was up')
    setCounter(ref.current)
  }
 

  return (
    <div>
      <h1>UseReff</h1>
        <button onClick={() => ref.current++}>Нажато {counter}  разів</button>
    <br/>
    <button onClick={upCounter}>Обновити</button>
    </div>
  )
}
