import { format } from "date-fns";
export const formatDate = (date: string) => {
  const newdate = date.replace(" 00:00:00", "");
  const data = format(new Date(newdate), "dd/MM/yyyy");
  return data ?? "-";
};
