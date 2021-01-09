import { schemaComposer } from "graphql-compose";
import { RecipientID, Url } from "../types/Scalars";

export const SharingLinkTS = schemaComposer.createObjectTC({
  name: "SharingLink",
  description:
    "Retrieve or generate (re-issue) DocumentTokens for document recipients",
  fields: {
    id: RecipientID.NonNull,
    link: Url.NonNull,
  },
});
