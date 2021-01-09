import { FieldConfig } from "../../definitions";
import { getTreatments } from "../../../verdor/treatments";
import { schemaComposer } from "graphql-compose";

export const TreatmentsJSON = schemaComposer.createScalarTC(`
  scalar TreatmentsJSON
`);

export default {
  type: TreatmentsJSON,
  args: {
    features: "[String!]!",
  },
  description: `
Request URL: https://api.pandadoc.com/users/treatments
`,
  resolve: (_, args, { axios }) =>
    getTreatments(axios, { features: args.features }),
} as FieldConfig<{
  features: Array<string>;
}>;
