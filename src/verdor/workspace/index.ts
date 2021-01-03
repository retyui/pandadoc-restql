import { AxiosInstance } from "axios";

export const getWorkspaceById = (
  axios: AxiosInstance,
  {
    workspaceId,
    organizationId,
  }: { workspaceId: string; organizationId: string }
) =>
  axios
    .get(`/org/${organizationId}/ws/${workspaceId}/`)
    .then((res) => res?.data);
