import { getFolderById } from "../../../verdor/folder";
import { FieldConfig } from "../../definitions";
import { FolderTC } from "../../entities/FolderTC";
import { FolderID } from "../../types/Scalars";

export default {
  type: FolderTC,
  args: {
    id: FolderID.NonNull,
  },
  description: `
Request URL: https://api.pandadoc.com/folders/<folderId>/
`,
  resolve: (_, args, { axios }) => getFolderById(axios, { folderId: args.id }),
} as FieldConfig;
