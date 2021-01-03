import { schemaComposer } from "graphql-compose";
import { UserID } from "../types/Scalars";

export const ContactTC = schemaComposer.createObjectTC({
  name: "Contact",
  fields: {
    id: { type: UserID.NonNull },
    email: "String!",
    is_internal: "Boolean!",
    removed: "Boolean!",
    avatar: {
      type: "String",
      description:
        "Url to profile image (example: 'https://pd-staging-media.s3.us-west-2.amazonaws.com:443/users/G7joiw7DcRQ46yhM53uq2Q/avatar-200x200.jpg')",
    },
    city: "String",
    company: "String",
    country: "String",
    first_name: "String",
    last_name: "String",
    notes: "String",
    phone: "String",
    postal_code: "String",
    state: "String",
    street_address: "String",
    title: "String",
  },
});
