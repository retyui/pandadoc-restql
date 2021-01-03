import { FieldConfig } from "../../definitions";
import { DocumentTC } from "../../entities/DocumentTC";
import { DocumentID, OrganizationID, WorkspaceID } from "../../types/Scalars";
import { getDocumentById } from "../../../verdor/documents";

export default {
  type: DocumentTC,
  args: {
    organizationId: OrganizationID.NonNull,
    workspaceId: WorkspaceID.NonNull,
    documentId: DocumentID.NonNull,
  },
  description: `
Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/
`,
  resolve: (_, args, { axios }) =>
    getDocumentById(axios, {
      organizationId: args.organizationId,
      workspaceId: args.workspaceId,
      documentId: args.documentId,
    }),
} as FieldConfig;
