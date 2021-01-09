import { schemaComposer } from "graphql-compose";

export const FIXME = schemaComposer.createScalarTC({
  name: "FixMe",
  description: "I DO NOT KNOW WHAT TYPE HERE SHOULD BE ((",
});

export const PhoneNumber = schemaComposer.createScalarTC({
  name: "PhoneNumber",
  description: 'Any phone number no restrictions (example: "0", "14845101364")',
});

export const Email = schemaComposer.createScalarTC({
  name: "Email",
  description: "e-mail address (exmaple: 'test@example.com')",
});

export const Url = schemaComposer.createScalarTC({
  name: "Url",
  description:
    "URL (example: 'https://app.pandadoc.com/document/1cd272892f87dc644')",
});

export const ImageUrl = schemaComposer.createScalarTC({
  name: "ImageUrl",
  description: "Url to image (example: 'https://s3.amazonaws.com/test.jpg')",
});

export const CssColor = schemaComposer.createScalarTC({
  name: "CssColor",
  description: "Color value (#ffffff)",
});

export const UUID = schemaComposer.createScalarTC(`
  scalar UUID
`);

export const FieldID = schemaComposer.createScalarTC(`
  scalar FieldID
`);

export const OrganizationID = schemaComposer.createScalarTC(`
  scalar OrganizationID
`);

export const WorkspaceID = schemaComposer.createScalarTC(`
  scalar WorkspaceID
`);

export const UserID = schemaComposer.createScalarTC(`
  scalar UserID
`);

export const ContactID = schemaComposer.createScalarTC(`
  scalar ContactID
`);

export const RecipientID = schemaComposer.createScalarTC(`
  scalar RecipientID
`);

export const FolderID = schemaComposer.createScalarTC(`
  scalar FolderID
`);

export const ThemeID = schemaComposer.createScalarTC(`
  scalar ThemeID
`);

export const DocumentID = schemaComposer.createScalarTC(`
  scalar DocumentID
`);

export const RevisionID = schemaComposer.createScalarTC(`
  scalar RevisionID
`);

export const AuditTrailID = schemaComposer.createScalarTC(`
  scalar AuditTrailID
`);

export const Currencies = schemaComposer.createScalarTC({
  name: "Currencies",
  description: `https://en.wikipedia.org/wiki/ISO_4217 (USD" | "BYN"| "EUR" | ...)`,
});
