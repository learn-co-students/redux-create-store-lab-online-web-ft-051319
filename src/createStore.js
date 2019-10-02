import candyReducer from './reducers/candyReducer.js'
import countReducer from './reducers/countReducer.js'

export default function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state,action)
    render()
  }

  function getState(){
    return state;
  }

  dispatch({type: '@@INIT'})

  return {dispatch, getState}
}


function render() {
  const container = document.getElementById('container');
 // container.textContent = store.getState().count
}
//let store = createStore(candyCount)
 