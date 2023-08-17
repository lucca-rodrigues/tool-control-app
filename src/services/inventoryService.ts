import { api } from "./api";

export const getInventoryService = (id: number) => {
  return api
    .get(`/v1/inventory_status_supplier/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getInventoryItemsService = (
  id: number,
  status: string,
  offset?: number
) => {
  return api
    .get(`/v1/inventory/${id}/items?status=${status}&offset=${offset}&limit=10`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
