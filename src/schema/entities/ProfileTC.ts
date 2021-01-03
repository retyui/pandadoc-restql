import { schemaComposer } from "graphql-compose";

import { CompanySizeTC } from "./PropertiesTC";
import { UserID, WorkspaceID } from "../types/Scalars";

export const SignatureTC = schemaComposer.createObjectTC({
  name: "Signature",
  fields: {
    data: { type: "String!", description: "Encode image data" },
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
      id: { type: "String!" },
      iid: { type: "Int!" },
      signature: { type: SignatureTC },
      avatar: {
        type: "String",
        description:
          "Url to profile image (example: 'https://pd-staging-media.s3.us-west-2.amazonaws.com:443/users/G7joiw7DcRQ46yhM53uq2Q/avatar-200x200.jpg')",
      },
      email: {
        type: "String!",
        description: "e-mail address 'test@example.com'",
      },
      is_suspended: {
        type: "Boolean!",
        description: "Checks whether that user has no active workspace",
      },
      first_name: { type: "String!" },
      last_name: { type: "String!" },
      phone_number: {
        type: "String!",
        description:
          'Any phone number no restrictions (example: "0", "14845101364")',
      },
      signup_source: { type: "String!", description: '(example: "login")' },
      company_name: { type: "String" },
      company_size: { type: CompanySizeTC },
      is_organization_owner: "Boolean!",
      is_organization_admin: "Boolean!",
      email_verified: "Boolean!",
      date_registered: "Date!",
      date_joined: "Date!",
      org_date_created: "Date",
      license: { type: "String!", description: '(example: "Full")' },
      workspace: { type: WorkspaceID.NonNull },
      actor: {
        type: UserID.NonNull,
        description: "TODO: Not sure that is UserID",
      },
      // FIXME
      // currency_formats: {},
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
