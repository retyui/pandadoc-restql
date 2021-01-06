import { AxiosInstance } from "axios";

import { createParamsValidator, InferParamsType } from "../params";

import { parseProfile } from "./serializer";
import { getExcludeProfileParams } from "./params";
import * as yup from "yup";

const validateParams = createParamsValidator(
  yup.object().shape({
    includeFields: yup.array(yup.string().required()),
  })
);

export async function getProfile(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { includeFields } = await validateParams(params);
  const { data: profile } = await axios.get(`/profile`, {
    params: getExcludeProfileParams(includeFields),
  });

  return parseProfile(profile);
}
