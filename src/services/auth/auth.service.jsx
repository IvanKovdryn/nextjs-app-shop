import { removeTokenFromStorage, saveTokenToStorage } from "./auth.helper";

export const AuthService = {
  async login(email, password) {
    const res = await axios.post("/auth/login", {
      email,
      password,
    });
    if (res.data.accessToken) await saveTokenToStorage(res.data.accessToken);
    return res.data;
  },

  async register(email, password) {
    const res = await axios.post("/auth/register", {
      email,
      password,
    });
    if (res.data.accessToken) await saveTokenToStorage(res.data.accessToken);
    return res.data;
  },

  async logout() {
    await removeTokenFromStorage();
  },
};
