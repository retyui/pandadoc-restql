import { schemaComposer } from "graphql-compose";
import { FolderID, WorkspaceID } from "../types/Scalars";
import { UserTC } from "./UserTD";
import { getFolderTreeById } from "../../verdor/folder";

export const FolderTypeTC = schemaComposer.createEnumTC({
  name: "FolderType",
  description: `http://gitlab.pandadoc.com/product/gwpy-core/-/blob/master/pandadoc/apps/documents/enums.py#L66`,
  values: {
    REGULAR: { value: 0 },
    INBOX: { value: 1 },
    TRASH: { value: 2 },
    TEMPLATES: { value: 3 },
    CONTENT_TEMPLATES: { value: 4 },
  },
});

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
    type: FolderTypeTC.NonNull,
  },
});

FolderTC.addFields({
  tree: {
    type: () => FolderTC.NonNull.List.NonNull,
    resolve: (folder, args, context, info) =>
      getFolderTreeById(context.axios, { folderId: folder.id }),
    extensions: {
      // @ts-ignore
      complexity: ({ childComplexity }) => childComplexity * 100,
    },
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
