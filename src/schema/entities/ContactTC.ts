import { schemaComposer } from "graphql-compose";
import { ContactID, Email, ImageUrl, PhoneNumber } from "../types/Scalars";

export const ContactTC = schemaComposer.createObjectTC({
  name: "Contact",
  fields: {
    id: ContactID.NonNull,
    avatar: ImageUrl,
    city: "String",
    company: "String",
    country: "String",
    email: Email.NonNull,
    first_name: "String",
    last_name: "String",
    is_internal: "Boolean!",
    notes: "String",
    phone: PhoneNumber,
    postal_code: "String",
    removed: "Boolean!",
    state: "String",
    street_address: "String",
    title: "String",
  },
});
