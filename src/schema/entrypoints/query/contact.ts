import { getContactById } from "../../../verdor/contacts";
import { FieldConfig } from "../../definitions";
import { ContactTC } from "../../entities/ContactTC";
import { UserID } from "../../types/Scalars";

export default {
  type: ContactTC,
  args: {
    id: UserID.NonNull,
  },
  description: `
Request URL: https://api.pandadoc.com/contacts/<contactId>
`,
  resolve: (_, args, { axios }) =>
    getContactById(axios, { contactId: args.id }),
} as FieldConfig;
