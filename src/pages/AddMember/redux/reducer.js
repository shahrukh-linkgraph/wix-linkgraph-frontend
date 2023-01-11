import {
  ADD_MEMBER_REGISTER,
 ADD_MEMBER_REGISTER_SUCCESS,
 ADD_MEMBER_REGISTER_FAILURE
} from "./type";

const initialState = {
  addMember: [],
  loading: false,
  error: null,
};

export default function addRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBER_REGISTER:
      return {
        ...state,
        loading: true,
        addMember: [],
      };

    case ADD_MEMBER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        addMember: action.data,
      };

    case ADD_MEMBER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
