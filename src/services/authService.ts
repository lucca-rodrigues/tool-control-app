import { api } from "./api";

export const authService = ({ data }: any) => {
  return api
    .post("/v1/login", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
