import { combineReducers, createStore } from "redux";

const initialState = {
  cartData: {
    cartList: [],
  },
  activities: {
    activityData: {},
    activityList: [],
    categoryList: [],
    catActList: [],
    activitiesTodayList: [],
    discountList: [],
    lists: {},
    indexOfCat: 0,
    
  },
  cities: {
    cityData: {},
    cityList: [],
    cityListHero: [],
  },
  navBarStatus: {
    isActive: false,
    isInputActive: false,
  },

  moneyValue: '€'
};

function cartDataReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, cartList: [...state.cartList, action.payload] };
    case "REMOVE_PRODUCT":
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
    case "SET_ACTIVITY":
      return { ...state, activityData: action.payload };
    case "SET_ACTIVITY_LIST":
      return { ...state, activityList: action.payload };
    case "SET_DISCOUNT_LIST":
      return { ...state, discountList: action.payload};
    case "SET_CATEGORY_LIST":
      return { ...state, categoryList: action.payload}
    case "SET_TODAY_ACTIVITIES":
      return { ...state, activitiesTodayList: action.payload};
    case "SET_LISTS":
      return { ...state, lists: action.payload};
    case "SET_CAT_ACT":
      return { ...state, catActList: action.payload};
    case "SET_INDEX_CAT":
      return { ...state, indexOfCat: action.payload};
    default:
      return state;
  }
}

function cityReducer(state = {}, action) {

    switch (action.type) {
        case "SET_CITY":
            return {...state, cityData: action.payload};
        case "SET_CITY_LIST":
            return {...state, cityList: action.payload}
        case "SET_CITY_HERO_LIST":
            return {...state, cityListHero: action.payload}
        default:
            return state;
    }

}

function navBarStatusReducer(state = {}, action) {
  switch (action.type) {
    case "SET_OPEN":
      return { isActive: true };
    case "SET_CLOSE":
      return { isActive: false };
    case "SET_INPUT_ACTIVE":
      return { isInputActive: true };
    case "SET_INPUT_INACTIVE":
      return { isInputActive: false };
    default:
      return state;
  }
}

function moneyValueReducer(state = {}, action) {
    switch (action.type) {
      case "SET_MONEY_VALUE":
        return state = action.payload;
      default:
        return state;
    }
}

const rootReducer = combineReducers({
  cartData: cartDataReducer,
  activities: activitiesReducer,
  cities: cityReducer,
  navBarStatus: navBarStatusReducer,
  moneyValue: moneyValueReducer,
});

const store = createStore(rootReducer, initialState);

export default store;

//test second
