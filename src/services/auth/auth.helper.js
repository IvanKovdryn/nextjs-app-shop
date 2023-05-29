import { remove, set } from "js-cookie";

export const saveTokenToStorage = async (accessToken) => {
  await set("accessToken", accessToken);
};

export const removeTokenFromStorage = async () => {
  await remove("accessToken");
};
