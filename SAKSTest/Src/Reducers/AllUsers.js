import {FETCH_ALL_USERS, FETCH_ALL_USERS_SUCCESS, FETCH_ALL_USERS_ERROR,SHOWMODAL,CLOSEMODAL} from '../Actions/ActionTypes';
  
  const initialState = {
    allUsers:[],
    isModalVisible:false,
    selectedItem: {
          "FullName": "Supun Silva",
            "Gender": "Male",
            "DOB": "1990-10-09",
            "Email": "supun@gmail.com",
    }
};

const reducer = (state = initialState, action) => {
  
  console.log();
  switch (action.type) {
    case FETCH_ALL_USERS:
      return { ...state, loading:true};
    case FETCH_ALL_USERS_SUCCESS:
      return { ...state, allUsers: action.payload.data, loading: false, error: '' };
    case FETCH_ALL_USERS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SHOWMODAL: 
      return { ...state, isModalVisible: true, selectedItem: action.payload};
    case CLOSEMODAL:
      return { ...state, isModalVisible: false,};
    default:
      return state;
  }
};

export default reducer;