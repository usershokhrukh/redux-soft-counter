const {createStore} = Redux;

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const countDisplay = document.querySelector(".count")
const initialState = {
  count: 0,
};

function counterState(state = initialState, action) {
  switch (action.type) {
    case "inc":
      return {
        count: state.count + 1,
      };
    case "dec":
      return {
        count: state.count - 1,
      };
    case "reset":
      return {
        count: state.count = 0,
      };
    default:
      return state
  }
}

const store = createStore(counterState)
plus.addEventListener("click", ()=>{
  store.dispatch({type: "inc"})
  const count = store.getState();
  countDisplay.textContent = `${count.count}`  
})

minus.addEventListener("click", ()=>{
  store.dispatch({type: "dec"})
  const count = store.getState();
  countDisplay.textContent = `${count.count}`  
})

reset.addEventListener("click", ()=>{
  store.dispatch({type: "reset"})
  const count = store.getState();
  countDisplay.textContent = `${count.count}`  
})


