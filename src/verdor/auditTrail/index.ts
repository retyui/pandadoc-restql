import { AxiosInstance } from "axios";
import { createParamsValidator, InferParamsType } from "../params";
import * as yup from "yup";
import { parseAuditTrail } from "./serializer";

const validateParams = createParamsValidator(
  yup.object().shape({
    documentId: yup.string().required(),
  })
);

export async function getDocumentAuditTrail(
  axios: AxiosInstance,
  params: InferParamsType<typeof validateParams>
) {
  const { documentId } = await validateParams(params);

  const { data: auditTrails } = await axios.get(
    `/documents/${documentId}/audit_trail`
  );

  return auditTrails.map(parseAuditTrail);
}
