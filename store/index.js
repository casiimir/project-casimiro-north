import { combineReducers, createStore } from "redux";

const initialState = {
  cartData: {
    cartList: [],
  },
  activities: {},
  cities: {
    cityData: {}
  }
};

function cartDataReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, cartList: [...state.cartList, action.payload] };
    case "REMOVE_PRODUCT":
      console.log(action.payload);
      return {
        ...state,
        cartList: state.cartList.filter((_, id) => id !== action.payload),
      };
    default:
      return state;
  }
}

function activitiesReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function cityReducer(state = {}, action) {
    switch (action.type) {
        case "SET_CITY":
            return {cityData: action.payload};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
  cartData: cartDataReducer,
  activities: activitiesReducer,
  cities: cityReducer,
});

const store = createStore(rootReducer, initialState);

export default store;

//test second
