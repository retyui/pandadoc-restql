import { AxiosInstance } from "axios";
import { createParamsValidator, InferParamsType } from "../params";
import * as yup from "yup";

const validateParams = createParamsValidator(
  yup.object().shape({
    features: yup.array(yup.string().required()).min(1).required(),
  })
);

export async function getTreatments(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { features } = await validateParams(params);
  const { data: result } = await axios.get(`/users/treatments`, {
    // @ts-ignore
    params: new URLSearchParams(
      features.map((feature) => ["feature", feature])
    ), // ::toString() => feature=my_value_1&feature=my_value_2
  });

  return result;
}
