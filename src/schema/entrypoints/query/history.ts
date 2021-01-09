import { FieldConfig } from "../../definitions";
import { DocumentID } from "../../types/Scalars";
import {
  DocumentHistoryActionTS,
  DocumentHistoryOrderTC,
} from "../../entities/DocumentHistoryActionTS";
import { getDocumentHistory } from "../../../verdor/history";

export default {
  type: DocumentHistoryActionTS.NonNull.List,
  args: {
    documentId: DocumentID.NonNull,
    order: DocumentHistoryOrderTC,
    page: "Int",
    count: "Int",
  },
  description: `
Request URL: https://api.pandadoc.com/documents/<documentId>/actions
`,
  resolve: (_, args, { axios }) =>
    getDocumentHistory(axios, {
      documentId: args.documentId,
      order_by: args.order,
      count: args.count,
      page: args.page,
    }),

  extensions: {
    complexity: ({ args, childComplexity }) =>
      childComplexity * (args.count || 100),
  },
} as FieldConfig<{
  documentId: string;
  order?: "date_created" | "-date_created";
  count?: number;
  page?: number;
}>;
