import { getFolderTreeById } from "../../../verdor/folder";
import { FieldConfig } from "../../definitions";
import { FolderTC } from "../../entities/FolderTC";
import { FolderID } from "../../types/Scalars";

export default {
  type: FolderTC.NonNull.List,
  args: {
    id: FolderID.NonNull,
  },
  resolve: (_, args, context, info) =>
    getFolderTreeById(context.axios, { folderId: args.id }),

  description: `
Request URL: https://api.pandadoc.com/folders/<folderId>/tree
  
List of folders from the root folder to this folder

If you try get 'folder3' you will get:

[{id:'root_id'}, {id:'folder2_id'}, {id:'folder3_id'}]


root
├── folder1
├── folder2
│   ├── folder3
`,
} as FieldConfig;
