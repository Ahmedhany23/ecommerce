import api from "@/app/api/api";
import { isLogged, Signup } from "../types/ecommerceType";

export const getUser = (formData) => {
  return async (dispatch) => {
    const { data } = await api.post("/auth/local", {
      identifier: formData.email,
      password: formData.password,
    });
    dispatch({ type: isLogged, data: data, confirmed: data.user.confirmed });
  };
};

export function CreateUser(formData) {
  return async (dispatch) => {
    const { data } = await api.post("/auth/local/register", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    dispatch({ type: Signup, data: data });
  };
}
