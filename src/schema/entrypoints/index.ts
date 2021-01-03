import { astToSchema, directoryToAst } from "graphql-compose-modules";
import { schemaComposer } from "graphql-compose";

const ast = directoryToAst(module);
const sc = astToSchema(ast, { schemaComposer });

sc.Query.setDescription("for PandaDoc with ❤️");
sc.Mutation.setDescription("for PandaDoc with ❤️");

export const schema = schemaComposer.buildSchema();
