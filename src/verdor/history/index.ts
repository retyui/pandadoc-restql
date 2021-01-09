import { AxiosInstance } from "axios";
import { createParamsValidator, InferParamsType } from "../params";
import * as yup from "yup";
import { parseHistoryAction } from "./serializer";

const validateParams = createParamsValidator(
  yup.object().shape({
    documentId: yup.string().required(),

    page: yup.number().integer().min(1).default(1),
    count: yup.number().integer().min(1).max(100).default(30),
    order_by: yup
      .mixed<"date_created" | "-date_created">()
      .oneOf(["date_created", "-date_created"]),
  })
);

export async function getDocumentHistory(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { documentId, order_by, count, page } = await validateParams(params);

  const {
    data: { results: actions },
  } = await axios.get(`/documents/${documentId}/actions`, {
    params: {
      order_by,
      count,
      page,
    },
  });

  return actions.map(parseHistoryAction);
}
