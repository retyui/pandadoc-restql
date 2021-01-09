import { FieldConfig } from "../../definitions";
import { DocumentID, OrganizationID, WorkspaceID } from "../../types/Scalars";
import { getDocumentSharingLinks } from "../../../verdor/documents";
import { SharingLinkTS } from "../../entities/SharingLinkTC";

export default {
  type: SharingLinkTS.NonNull.List,
  args: {
    organizationId: OrganizationID.NonNull,
    workspaceId: WorkspaceID.NonNull,
    documentId: DocumentID.NonNull,
  },
  description: `
Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/recipients/sharing-links
`,
  resolve: (_, args, { axios }) =>
    getDocumentSharingLinks(axios, {
      organizationId: args.organizationId,
      workspaceId: args.workspaceId,
      documentId: args.documentId,
    }),
} as FieldConfig<{
  organizationId: string;
  workspaceId: string;
  documentId: string;
}>;
