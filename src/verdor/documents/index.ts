import * as yup from "yup";
import { AxiosInstance } from "axios";
import { createParamsValidator, InferParamsType } from "../params";
import { parseDocument } from "./serializer";

const validateGetDocParams = createParamsValidator(
  yup.object().shape({
    organizationId: yup.string().required(),
    workspaceId: yup.string().required(),
    documentId: yup.string().required(),
  })
);

export async function getDocumentInfoById(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateGetDocParams>
) {
  const {
    organizationId,
    workspaceId,
    documentId,
  } = await validateGetDocParams(params);

  const { data: documentInfo } = await axios.get(
    `/org/${organizationId}/ws/${workspaceId}/documents/${documentId}/info`
  );

  return documentInfo;
}

export async function getDocumentById(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateGetDocParams>
) {
  const {
    organizationId,
    workspaceId,
    documentId,
  } = await validateGetDocParams(params);

  const { data: document } = await axios.get(
    `/org/${organizationId}/ws/${workspaceId}/documents/${documentId}/`
  );

  return parseDocument(document);
}

const validateGetContactDocsParams = createParamsValidator(
  yup.object().shape({
    contactId: yup.string().required(),
    page: yup.number().integer().min(1).default(1),
    count: yup.number().integer().min(1).max(100).default(30),
    status__ne: yup.number().integer().default(0),
    order_by: yup.string().default("-date_modified"),
  })
);

export const getDocumentsByContactId = async (
  axios: AxiosInstance,
  params: InferParamsType<typeof validateGetContactDocsParams>
) => {
  const {
    count,
    contactId,
    page,
    status__ne,
    order_by,
  } = await validateGetContactDocsParams(params);

  const {
    data: { results: documents },
  } = await axios.get(`/contacts/${contactId}/documents`, {
    params: { page, count, status__ne, order_by },
  });

  return documents.map((
    // @ts-ignore
    doc
  ) => parseDocument(doc));
};

export async function getDocumentSharingLinks(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateGetDocParams>
) {
  const {
    organizationId,
    workspaceId,
    documentId,
  } = await validateGetDocParams(params);

  const { data: sharingLinks } = await axios.post(
    `/org/${organizationId}/ws/${workspaceId}/documents/${documentId}/recipients/sharing-links`
  );

  return sharingLinks;
}
