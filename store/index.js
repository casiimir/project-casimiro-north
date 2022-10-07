import { combineReducers, createStore } from "redux";

const initialState = {
  cartData: {
    Uuid: "",
    cartList: [],
    purchasedList: [],
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
    favorites: [],
    searchResults: {},
    mediaData: [],
    reviewsData: [],
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
  modalVisibility: false,

  loginModalVisibility: false,

  user_data: {
    userName: "",
  }
};

function cartDataReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PRODUCT": 
      state.cartList = [...state.cartList, action.payload]
      localStorage.setItem("cart", JSON.stringify(state.cartList))
      return { ...state, cartList: state.cartList };
    case "REMOVE_PRODUCT":
      state.cartList = state.cartList.filter((_, id) => id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cartList))
      return {
        ...state,
        cartList: state.cartList
      };
    case "SET_UUID":
      return {...state, Uuid: action.payload}
    case "BUY_ITEMS":
      return { ...state, purchasedList: state.cartList}
    case "CLEAR_PRODUCT":
      return { ...state, cartList: []}
    case "RESTORE_CART":
      return { ...state, cartList: action.payload}
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
    case "SET_FAVORITE":
      return {...state, favorites: [...state.favorites, action.payload]};
    case "REMOVE_FAVORITE":
      return {...state, favorites: state.favorites.filter((item) => item.uuid !== action.payload)}
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload}
    case "CLEAN_SEARCH_RESULTS":
      return { ...state, searchResults: {}}   
    case "SET_MEDIA_DATA":
      return { ...state, mediaData: action.payload}
    case "SET_REVIEWS":
      return { ...state, reviewsData: action.payload}
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

function currencyLanguageReducer(state = {}, action) {
    switch (action.type) {
      case "SET_CURRENCY":
        return {...state, currency: action.payload};
      case "SET_LANGUAGE":
        return {...state, language: action.payload}
      default:
        return state;
    }
}

function modalVisibilityChangeReducer(state = {}, action) {
  switch (action.type) {
    case "SET_TRUE":
      return state = true;
    case "SET_FALSE":
      return state = false;
    default:
      return state;
  }
}

function loginModalVisibilityReducer(state = {}, action) {
  switch (action.type) {
    case "SET_LOGIN_TRUE":
      return state = true;
    case "SET_LOGIN_FALSE":
      return state = false;
    default:
      return state;
  }
}

function userDataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {...state, userName: action.payload};
    default: return state;
  }
}

const rootReducer = combineReducers({
  cartData: cartDataReducer,
  activities: activitiesReducer,
  cities: cityReducer,
  navBarStatus: navBarStatusReducer,
  localization: currencyLanguageReducer,
  modalVisibility: modalVisibilityChangeReducer,
  loginModalVisibility: loginModalVisibilityReducer,
  user_data: userDataReducer,
});

const store = createStore(rootReducer, initialState);

export default store;

//test second
