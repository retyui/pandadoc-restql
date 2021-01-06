import { schemaComposer } from "graphql-compose";
import { ContactID, Email, ImageUrl, PhoneNumber } from "../types/Scalars";

export const COMMON_CONTACT_FIELDS = {
  id: ContactID.NonNull,
  avatar: ImageUrl,
  email: Email.NonNull,
  first_name: "String",
  last_name: "String",
};

export const ContactTC = schemaComposer.createObjectTC({
  name: "Contact",
  fields: {
    ...COMMON_CONTACT_FIELDS,
    is_internal: "Boolean!",
    removed: "Boolean!",
    city: "String",
    company: "String",
    country: "String",
    notes: "String",
    phone: PhoneNumber,
    postal_code: "String",
    state: "String",
    street_address: "String",
    title: "String",
  },
});
