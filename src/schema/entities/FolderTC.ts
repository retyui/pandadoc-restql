import { schemaComposer } from "graphql-compose";
import { FolderID, WorkspaceID } from "../types/Scalars";
import { UserTC } from "./UserTD";
import { getFolderTreeById } from "../../verdor/folder";
import { GraphQLResolveInfo } from "graphql/type/definition";

export const FolderTC = schemaComposer.createObjectTC({
  name: "Folder",
  fields: {
    id: FolderID.NonNull,
    name: "String!",
    date_created: "Date!",
    date_modified: "Date!",
    owner: UserTC.NonNull,
    modified_by: UserTC.NonNull,
    parent: FolderID,
    workspace: WorkspaceID.NonNull,
    type: { type: "Int!", description: "No idea what is it!" },
  },
});

FolderTC.addFields({
  tree: {
    resolve: (folder, args, context, info) =>
      getFolderTreeById(context.axios, { folderId: folder.id }),
    type: () => FolderTC.NonNull.List.NonNull,
    description: `List of folders from the root folder to this folder

If you try get 'folder3' you will get:

[{id:'root_id'}, {id:'folder2_id'}, {id:'folder3_id'}]


root
├── folder1
├── folder2
│   ├── folder3
`,
  },
});
