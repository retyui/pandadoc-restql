import { AxiosInstance } from "axios";
import { createParamsValidator, InferParamsType } from "../params";
import * as yup from "yup";

const validateParams = createParamsValidator(
  yup.object().shape({
    contactId: yup.string().required(),
  })
);

export async function getContactById(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { contactId } = await validateParams(params);
  const { data: contact } = await axios.get(`/contacts/${contactId}`);

  return contact;
}
