import { AxiosInstance } from "axios";
import { createParamsValidator, InferParamsType } from "../params";
import * as yup from "yup";

const validateParams = createParamsValidator(
  yup.object().shape({
    organizationId: yup.string().required(),
    workspaceId: yup.string().required(),
  })
);

export async function getWorkspaceById(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { organizationId, workspaceId } = await validateParams(params);
  const { data: workspace } = await axios.get(
    `/org/${organizationId}/ws/${workspaceId}/`
  );

  return workspace;
}
