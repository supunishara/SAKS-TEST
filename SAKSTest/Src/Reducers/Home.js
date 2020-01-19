
import {AddUser, AllUser} from '../Config/Images';


const initialState = {

  data : [
            {id:1, title: "Option 1", image:AddUser},
            {id:2, title: "Option 2", image:AllUser},
          ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;