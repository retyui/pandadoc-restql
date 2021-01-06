import { schemaComposer } from "graphql-compose";
import { Email, ImageUrl, UserID } from "../types/Scalars";

export const UserTC = schemaComposer.createObjectTC({
  name: "User", // usually used as `.owner = {}`
  fields: {
    id: UserID.NonNull,
    avatar: ImageUrl,
    email: Email.NonNull,
    first_name: "String!",
    iid: "Int!",
    is_suspended: {
      type: "Boolean!",
      description: "Checks whether that user has no active workspace",
    },
    last_name: "String!",
    phone_number: "String!",
    signup_source: { type: "String!", description: '(example: "login")' },
  },
});
