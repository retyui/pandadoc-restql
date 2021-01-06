import { schemaComposer } from "graphql-compose";

import { CompanySizeTC } from "./PropertiesTC";
import {
  ContactID,
  Email,
  ImageUrl,
  PhoneNumber,
  UserID,
  WorkspaceID,
} from "../types/Scalars";

export const SignatureTC = schemaComposer.createObjectTC({
  name: "Signature",
  fields: {
    data: {
      type: "String!",
      description: "Encode image data",
    },
    dataFormat: {
      type: "String!",
      description: 'Image format (example: "image/png;base64")',
    },
  },
});

export const ProfileTC = schemaComposer
  .createObjectTC({
    name: "Profile",
    fields: {
      id: UserID.NonNull,
      actor: ContactID.NonNull,
      avatar: ImageUrl,
      company_name: "String",
      company_size: CompanySizeTC,
      date_joined: "Date!",
      date_registered: "Date!",
      email: Email.NonNull,
      email_verified: "Boolean!",
      first_name: "String!",
      iid: "Int!",
      is_organization_admin: "Boolean!",
      is_organization_owner: "Boolean!",
      is_suspended: {
        type: "Boolean!",
        description: "Checks whether that user has no active workspace",
      },
      last_name: "String!",
      license: { type: "String!", description: '(example: "Full")' },
      org_date_created: "Date",
      phone_number: PhoneNumber.NonNull,
      signature: SignatureTC,
      signup_source: { type: "String!", description: '(example: "login")' },
      workspace: WorkspaceID.NonNull,
      // FIXME
      // currency_formats: {} <== empty data ???,
      // signup_backend: null,
      // account_type: null,
    },
  })
  .deprecateFields({
    company_name:
      "Always will be returned 'null' (More info: https://pandadoc.atlassian.net/browse/PD-7736)",
    company_size:
      "Always will be returned 'null' (More info: https://pandadoc.atlassian.net/browse/PD-7736)",
  });
