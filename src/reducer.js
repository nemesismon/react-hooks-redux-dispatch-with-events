// add code snippets from README

// let state = { count: 0 };

let state
function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = reducer(state, action);
  render()
}

function render() {
  const container = document.getElementById("container");
  container.textContent = state.count;
}

dispatch({type: '@@init'})

const button = document.getElementById("button");

button.addEventListener("click", () => {
  dispatch({ type: "counter/increment" });
})