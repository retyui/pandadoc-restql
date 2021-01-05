import path from "path";
import fs from "fs";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import { codegen } from "@graphql-codegen/core";
import { schema } from "../src/schema/entrypoints";

const outputPath = path.resolve(__dirname, "../schema.ts");
const config = {
  filename: outputPath,
  schemaAst: schema,
  plugins: [
    // Each plugin should be an object
    {
      typescript: {
        declarationKind: "interface",
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
