import React from 'react'

function UseState() {
    const [state, setState] = React.useState(0)
    const [numbers, setNumbes] = React.useState([1,2,3])
    const [stateObj, setStateObj] = React.useState({
      value1: true,
      value2: 30,
      value3: 'some information'
    })
  
    const increment = () => {
      setState(state + 1)        
    }
  
    const decrement = () => {
      setState(state - 1)
    }
  
    const addNewNumber = () => {
      const inter = 'Нова строка'
      setNumbes([...numbers, inter])
    } 
  
    const showeObj = () => {
      setStateObj({...stateObj, value1: !stateObj.value1})
    }

  return (
    <div>
      <h1>UseState</h1>
    <h1>
      Щетчик {state}
    </h1>
    <button onClick={increment} className="btn">Додати</button>
    <button onClick={decrement} className="btn">Забрати</button>

    <ul>
      {
        numbers.map((num, index) => (<li key={index}>{num}</li>))
      }
    </ul>
    <button onClick={addNewNumber}>Додати строку</button>
    <div className="newApp">
      <h1>State with Object</h1>
      <button onClick={showeObj}>Заховати/Показати</button>
      <p>{stateObj.value1}</p>
      {
        stateObj.value1 ? (
          <div>
            <p>{stateObj.value2}</p>
            <p>{stateObj.value3}</p>
          </div>
        ) : ''
      }
    </div>
  </div>
  )
}

export default UseState