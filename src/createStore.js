
import candyReducer from './reducers/candyReducer.js'
import countReducer from './reducers/countReducer.js'


export default function createStore(reducer) {
  let state 

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  return {
    dispatch,
    getState
  };
}

// let store = createStore(candyReducer);
candyStore.dispatch({type: "@@INIT"})



function render() {
  const container = document.getElementById('container');
  container.textContent = candyStore.getState().count
}
