const Redux = require("redux");
const reduxLogger = require('redux-logger');

const combineReducers = Redux.combineReducers;
const applyMiddleware = Redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS";

function buyCake() {
  return {
    type: BUY_CAKE
  };
}
function buyIceCreams() {
  return {
    type: BUY_ICECREAMS
  };
}

// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 20
// };

const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          ...state,
          numberOfCakes: state.numberOfCakes - 1
        };
      default:
        return state;
    }
  };

  const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAMS:
        return {
          ...state,
          numberOfIceCreams: state.numberOfIceCreams - 1
        };
      default:
        return state;
    }
  };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1
//       };
//     case BUY_ICECREAMS:
//       return {
//         ...state,
//         numberOfIceCreams: state.numberOfIceCreams - 1
//       };
//     default:
//       return state;
//   }
// };


const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = Redux.createStore(rootReducers, applyMiddleware(logger));

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
// The same result is showing in the bellows line .
console.log("another state", store.getState());
