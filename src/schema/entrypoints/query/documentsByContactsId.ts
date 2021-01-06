import { FieldConfig } from "../../definitions";
import { UserID } from "../../types/Scalars";
import { getDocumentsByContactId } from "../../../verdor/documents";
import { ContactDocumentTC, DocumentStatusTC } from "../../entities/DocumentTC";

export default {
  type: ContactDocumentTC.NonNull.List,
  args: {
    contactId: UserID.NonNull,
    page: "Int",
    count: "Int",
    statusNe: DocumentStatusTC,
  },
  description: `
Request URL: https://api.pandadoc.com/contacts/<ContactId>/documents
`,
  resolve: (_, args, { axios }) =>
    getDocumentsByContactId(axios, {
      contactId: args.contactId,
      page: args.page,
      count: args.count,
      status__ne: args.statusNe,
      order_by: undefined,
    }),
} as FieldConfig<{
  contactId: string;
  page?: number;
  count?: number;
  statusNe?: number;
}>;
