const defaultState = {
    customers: []
}

const ADD_CASTOMER = "ADD_CASTOMER"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {
    switch(action.type){
      case ADD_MANY_CUSTOMERS :
        return {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CASTOMER :
        return {...state, customers: [...state.customers, action.payload]}
      default:
        return state
    }
  }

  export const addCustomerAction = (payload) => ({type: ADD_CASTOMER, payload})
  export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})