import { getWorkspaceById } from "../../../verdor/workspace";
import { FieldConfig } from "../../definitions";
import { WorkspaceTC } from "../../entities/WorkspaceTC";
import { OrganizationID, WorkspaceID } from "../../types/Scalars";

export default {
  type: WorkspaceTC,
  args: {
    workspaceId: WorkspaceID.NonNull,
    organizationId: OrganizationID.NonNull,
  },
  description: `
Request URL: https://api.pandadoc.com/org/<organizationId>/ws/<workspaceId>/
`,
  resolve: (_, args, { axios }) =>
    getWorkspaceById(axios, {
      organizationId: args.organizationId,
      workspaceId: args.workspaceId,
    }).then((workspace) => {
      if (workspace.date_created) {
        workspace.date_created = new Date(workspace.date_created);
      }
      if (workspace.date_updated) {
        workspace.date_updated = new Date(workspace.date_updated);
      }

      return workspace;
    }),
} as FieldConfig<{
  organizationId: string;
  workspaceId: string;
}>;
