import { AxiosInstance } from "axios";
import { parseFolder } from "./serializer";
import { createParamsValidator, InferParamsType } from "../params";
import * as yup from "yup";

const validateParams = createParamsValidator(
  yup.object().shape({
    folderId: yup.string().required(),
  })
);

export async function getFolderById(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { folderId } = await validateParams(params);
  const { data: folder } = await axios.get(`/folders/${folderId}/`);

  return parseFolder(folder);
}

export async function getFolderTreeById(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { folderId } = await validateParams(params);
  const { data: folders } = await axios.get(`/folders/${folderId}/tree`);

  return folders.map(parseFolder);
}
