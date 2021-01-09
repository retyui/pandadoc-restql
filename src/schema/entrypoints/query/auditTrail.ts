import { FieldConfig } from "../../definitions";
import { DocumentID } from "../../types/Scalars";
import { DocumentAuditTrailTC } from "../../entities/DocumentAuditTrailTC";
import { getDocumentAuditTrail } from "../../../verdor/auditTrail";

export default {
  type: DocumentAuditTrailTC.NonNull.List,
  args: {
    documentId: DocumentID.NonNull,
  },
  description: `
Request URL: https://api.pandadoc.com/documents/<documentId>/audit_trail
`,
  resolve: (_, args, { axios }) =>
    getDocumentAuditTrail(axios, {
      documentId: args.documentId,
    }),
} as FieldConfig<{
  documentId: string;
}>;
