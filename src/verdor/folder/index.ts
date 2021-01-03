import { AxiosInstance } from "axios";
import { parseFolder } from "./serializer";

export const getFolderById = (
  axios: AxiosInstance,
  { folderId }: { folderId: string }
) =>
  axios
    .get(`/folders/${folderId}/`)
    .then((res) => res?.data)
    .then(parseFolder);

export const getFolderTreeById = (
  axios: AxiosInstance,
  { folderId }: { folderId: string }
) =>
  axios
    .get(`/folders/${folderId}/tree`)
    .then((res) => res?.data)
    .then((folders) => folders.map(parseFolder));
