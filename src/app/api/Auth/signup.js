import api from "../api";

export async function signup(formData) {
  try {
    const { data } = await api.post("/auth/local/register", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      return { error: error.response.data.error.message };
    } else {
      return { error: "An unexpected error occurred." };
    }
  }
}
