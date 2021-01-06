import { FieldConfig } from "../../definitions";
import { DocumentInfoTC } from "../../entities/DocumentTC";
import { DocumentID, OrganizationID, WorkspaceID } from "../../types/Scalars";
import { getDocumentInfoById } from "../../../verdor/documents";

export default {
  type: DocumentInfoTC,
  args: {
    organizationId: OrganizationID.NonNull,
    workspaceId: WorkspaceID.NonNull,
    documentId: DocumentID.NonNull,
  },
  description: `
Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/info
`,
  resolve: (_, args, { axios }) =>
    getDocumentInfoById(axios, {
      organizationId: args.organizationId,
      workspaceId: args.workspaceId,
      documentId: args.documentId,
    }),
} as FieldConfig<{
  organizationId: string;
  workspaceId: string;
  documentId: string;
}>;
