import { schemaComposer } from "graphql-compose";

export const FIXME = schemaComposer.createScalarTC({
  name: "FIXME",
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

export const ImageUrl = schemaComposer.createScalarTC({
  name: "ImageUrl",
  description: "Url to image (example: 'https://s3.amazonaws.com/test.jpg')",
});

export const CssColor = schemaComposer.createScalarTC({
  name: "CssColor",
  description: "Color value (#ffffff)",
});

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

export const FolderID = schemaComposer.createScalarTC(`
  scalar FolderID
`);

export const ThemeID = schemaComposer.createScalarTC(`
  scalar ThemeID
`);

export const DocumentID = schemaComposer.createScalarTC(`
  scalar DocumentID
`);
export const Currencies = schemaComposer.createScalarTC({
  name: "Currencies",
  description: '"USD" | "BYN"| "EUR" | ...',
});

export const DateFormatsJSON = schemaComposer.createScalarTC(`
  scalar DateFormatsJSON
`);

export const TreatmentsJSON = schemaComposer.createScalarTC(`
  scalar TreatmentsJSON
`);

export const DocumentTotalValueJSON = schemaComposer.createScalarTC({
  name: "DocumentTotalValueJSON",
  description: 'Record<Currencies, string>  (example  { USD: "0" })',
});

export const CurrencyFormatsJSON = schemaComposer.createScalarTC({
  name: "CurrencyFormatsJSON",
  description: `interface CurrencyFormatsJSON {
  [code: Currencies]: {
    code: Currencies;
    decimal: string;
    format: string;
    name: string;
    negativeFormat: string;
    pluralName: string;
    precision: number;
    symbol: string;
    thousand: string;
  };
};`,
});
