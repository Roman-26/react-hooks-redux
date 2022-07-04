
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addCustomerAction } from "./store/customerReducer";
import {fetchCustomer} from "./asyncActions/customers"
import UseState from "./example/UseState"
import MainUseEffect from "./example/useEffect/MainUseEffect"
import UseReff from "./example/UseReff"

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  
  const addCash = () => {
    dispatch({type:'ADD_CASH', payload:1})
  }

  const getCash = () => {
    dispatch({type:'GET_CASH', payload:1})
  }

const addCustomer = () => {
  const customer = {
    name:"Roma",
    id: Date.now
  }
  dispatch(addCustomerAction(customer))
}


  
  return (
   <div className="newApp">
    <UseState/>
    <div>______________________________________________________________________________________________________________________</div>
    <MainUseEffect/>
    <div>______________________________________________________________________________________________________________________</div>
    <UseReff/>
    <div>______________________________________________________________________________________________________________________</div>
    <br></br>

    <h1>React-Redux</h1>
     <button onClick={addCash} className="btn">Поповнити рахунок</button>
     <button onClick={getCash} className="btn">Зняти з рахунку</button>
     <button onClick={() => addCustomer()} className="btn">Додати замовника</button>

     <button onClick={() => dispatch(fetchCustomer())}>Замовники із бази</button>
     
     <div style={{fontSize: '3rem'}}>{cash}</div>
     <div>
      {
        customers.length>0 ? 
        <div>
          {customers.map((customer, index) => 
            <div key={index}>{customer.name}</div>
            )}
        </div>
        :
        <div>
          <h3>Замовники відсутні</h3>
        </div>
      }
     </div>
   </div>
  );
}

export default App;
