import { printSchema } from "graphql";
import path from "path";
import fs from "fs";
import { schema } from "../src/schema/entrypoints";

// generate schema.graphql file
const sdl = printSchema(schema, { commentDescriptions: true });
const outputPath = path.resolve(__dirname, "../schema.graphql");

fs.writeFileSync(outputPath, sdl);
