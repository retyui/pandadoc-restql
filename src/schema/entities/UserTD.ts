import { schemaComposer } from "graphql-compose";
import { UserID } from "../types/Scalars";

export const UserTC = schemaComposer.createObjectTC({
  name: "User",
  fields: {
    id: UserID.NonNull,
    email: "String!",
    first_name: "String!",
    last_name: "String!",
    phone_number: "String!",
    avatar: {
      type: "String",
      description:
        "Url to profile image (example: 'https://pd-staging-media.s3.us-west-2.amazonaws.com:443/users/G7joiw7DcRQ46yhM53uq2Q/avatar-200x200.jpg')",
    },
    iid: "Int!",
    is_suspended: {
      type: "Boolean!",
      description: "Checks whether that user has no active workspace",
    },
    signup_source: {
      type: "String!",
      description: '(example: "login")',
    },
  },
});
