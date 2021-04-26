import * as msg from "./../constants/message";
import * as types from "./../constants/actionType";

var initialState = msg.MSG_WELLCOME;
const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MSG:
      return action.msg;
    default:
      return [...state];
  }
};
export default message;
