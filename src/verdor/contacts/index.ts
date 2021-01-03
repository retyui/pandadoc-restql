import { AxiosInstance } from "axios";

export const getContactById = (
  axios: AxiosInstance,
  { contactId }: { contactId: string }
) => axios.get(`/contacts/${contactId}`).then((res) => res?.data);
