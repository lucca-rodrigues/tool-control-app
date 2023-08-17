import { api } from "./api";

export const statusHeaderService = (id: string) => {
  return api
    .get(`/v1/inventory_status_supplier/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
