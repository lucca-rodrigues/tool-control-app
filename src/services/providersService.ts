import { api } from "./api";

export const getProvidersService = () => {
  return api
    .get(`/v1/suppliers_user`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
