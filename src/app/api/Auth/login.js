import api from "../api";

export async function login(formData) {
  try {
    const { data } = await api.post("/auth/local", {
      identifier: formData.email,
      password: formData.password,
    });
    return  data ;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      return { error: error.response.data.error.message };
    } else {
      return { error: "An unexpected error occurred." };
    }
  }
}