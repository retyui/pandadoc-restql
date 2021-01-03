import { AxiosInstance } from "axios";

export const getProperties = (axios: AxiosInstance) =>
  axios.get("/properties").then((res) => res?.data);
