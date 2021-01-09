import path from "path";
import fs from "fs";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import { codegen } from "@graphql-codegen/core";
import { schema } from "../src/schema/entrypoints";
import { CurrenciesData } from "./data/CurrenciesData";

const outputPath = path.resolve(__dirname, "../schema.ts");
const config = {
  filename: outputPath,
  schemaAst: schema,
  plugins: [
    // Each plugin should be an object
    {
      typescript: {
        scalars: {
          AuditTrailID: "string",
          RevisionID: "string",
          UUID: "string",
          RecipientID: "string",
          ContactID: "string",
          DocumentID: "string",
          FieldID: "string",
          FolderID: "string",
          OrganizationID: "string",
          UserID: "string",
          WorkspaceID: "string",
          FixMe: "never",
          CssColor: "string",
          Currencies: CurrenciesData,
          Email: "string",
          ImageUrl: "string",
          PhoneNumber: "string",
          CurrencyFormatsJSON: `Record<Scalars["Currencies"], {
    code: Scalars["Currencies"];
    decimal: string;
    format: string;
    name: string;
    negativeFormat: string;
    pluralName: string;
    precision: number;
    symbol: string;
    thousand: string;
  }>`,
          DateFormatsJSON: `Record<DateFormats, string>`,
          TreatmentsJSON: `{ [featureName: string]: "control" | "on" | "off" }`,
          DocumentTotalValueJSON: `Record<Scalars["Currencies"], string>`,
        },
        declarationKind: "interface",
        skipTypename: true,
        useTypeImports: true,
        namingConvention: {
          typeNames: "pascal-case#pascalCase",
          enumValues: "upper-case#upperCase",
          transformUnderscore: true,
        },
      },
    },
  ],
  pluginMap: {
    typescript: typescriptPlugin,
  },
};

codegen(
  // @ts-ignore
  config
).then((output) => fs.writeFileSync(outputPath, output));
