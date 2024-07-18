"use client";
import { isLogged,Signup } from "../../types/ecommerceType";

const initalValue = { user: []  , logged: false ,newUser:[] };

export const authReducer = (state = initalValue, action) => {
  switch (action.type) {
    case isLogged:
      return { user: action.data ,logged: action.confirmed };
      case Signup:
        return { newUser: action.data};
    default:
      return state;
  }
};
