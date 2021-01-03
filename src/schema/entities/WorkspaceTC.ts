import { schemaComposer } from "graphql-compose";
import { OrganizationID, UserID, WorkspaceID } from "../types/Scalars";
import { UserTC } from "./UserTD";

export const EditorModeTC = schemaComposer.createEnumTC({
  name: "EditorMode",
  values: {
    EV1: { value: "EV1" },
    EV2: { value: "EV2" },
    EV1_EV2: { value: "EV1_EV2" },
  },
});

export const WorkspaceTC = schemaComposer.createObjectTC({
  name: "Workspace",
  fields: {
    id: WorkspaceID.NonNull,
    organization: OrganizationID.NonNull,
    owner: UserTC.NonNull,
    date_created: "Date!",
    date_updated: "Date",
    editor_mode: EditorModeTC.NonNull,
    active_members_count: "Int!",
    invited_members_count: "Int!",
    new_editor_available: "Boolean!",
    name: "String!",
    features: "[Int!]!", // FIXME: need feature enum
    members: {
      type: UserID.NonNull.List.NonNull,
    },

    // branding: WorkspaceBranding;
    // folders : WorkspaceFoldersConfig;
    // settings: WorkspaceSettings;
    // subscription: Subscription;
  },
});
