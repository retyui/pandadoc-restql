import { AxiosInstance } from "axios";
import { createParamsValidator, InferParamsType } from "../params";
import * as yup from "yup";
import { parseComment } from "./serializer";

const validateParams = createParamsValidator(
  yup.object().shape({
    organizationId: yup.string().required(),
    workspaceId: yup.string().required(),
    documentId: yup.string().required(),

    // ListCommentsQueryParamsSerializer http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/serializers.py#L176
    session_uuid: yup.string().required(),
    placement_type_document: yup.boolean(),
    // http://gitlab.pandadoc.com/leonid.novikov/gwpy-core/-/blob/master/pandadoc/apps/documents/comments/enums.py#L46
    status: yup.mixed<0 | 1>().oneOf([0, 1]), // RESOLVED = 0, ACTIVE = 1
    order_by: yup
      .mixed<
        "date_created" | "-date_created" | "date_updated" | "-date_updated"
      >()
      .oneOf([
        "date_created",
        "-date_created",
        "date_updated",
        "-date_updated",
      ]),
  })
);

export async function getDocumentComments(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const {
    organizationId,
    documentId,
    workspaceId,
    order_by,
    placement_type_document,
    session_uuid,
    status,
  } = await validateParams(params);

  const { data: comments } = await axios.get(
    `/org/${organizationId}/ws/${workspaceId}/documents/${documentId}/comments/list`,
    {
      params: {
        order_by,
        placement_type_document,
        session_uuid,
        status,
      },
    }
  );

  return comments.map(parseComment);
}
