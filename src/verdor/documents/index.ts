import { AxiosInstance } from "axios";
import { parseFolder } from "../folder/serializer";

type Params = {
  organizationId: string;
  workspaceId: string;
  documentId: string;
};

export const getDocumentInfoById = (
  axios: AxiosInstance,
  { organizationId, workspaceId, documentId }: Params
) =>
  axios
    .get(
      `/org/${organizationId}/ws/${workspaceId}/documents/${documentId}/info`
    )
    .then((res) => res?.data);

export const getDocumentById = (
  axios: AxiosInstance,
  { organizationId, workspaceId, documentId }: Params
) =>
  axios
    .get(`/org/${organizationId}/ws/${workspaceId}/documents/${documentId}/`)
    .then((res) => res?.data)
    .then((doc) => {
      doc.folder = parseFolder(doc.folder);

      return doc;
    });
