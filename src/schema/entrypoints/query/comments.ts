import { FieldConfig } from "../../definitions";
import {
  DocumentID,
  OrganizationID,
  UUID,
  WorkspaceID,
} from "../../types/Scalars";
import {
  CommentOrderTC,
  CommentStatusTC,
  CommentTC,
} from "../../entities/CommentsTC";
import { getDocumentComments } from "../../../verdor/comments";

export default {
  type: CommentTC.NonNull.List,
  args: {
    organizationId: OrganizationID.NonNull,
    workspaceId: WorkspaceID.NonNull,
    documentId: DocumentID.NonNull,
    sessionUuid: UUID.NonNull,
    order: CommentOrderTC,
    status: CommentStatusTC,
    placementTypeDocument: "Boolean",
  },
  description: `
Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/documents/<documentId>/comments/list
`,
  resolve: (_, args, { axios }) =>
    getDocumentComments(axios, {
      organizationId: args.organizationId,
      workspaceId: args.workspaceId,
      documentId: args.documentId,
      session_uuid: args.sessionUuid,
      status: args.status,
      placement_type_document: args.placementTypeDocument,
      order_by: args.order,
    }),
} as FieldConfig<{
  organizationId: string;
  workspaceId: string;
  documentId: string;
  sessionUuid: string;
  order?: "date_created" | "-date_created" | "date_updated" | "-date_updated";
  placementTypeDocument?: boolean;
  status?: 0 | 1;
}>;
