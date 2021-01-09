import { GraphQLResolveInfo } from "graphql";
import {
  ComposeOutputTypeDefinition,
  ObjectTypeComposerArgumentConfigDefinition,
} from "graphql-compose";
import { AxiosInstance } from "axios";

export interface FieldConfig<
  TArgs = never,
  TContext = { axios: AxiosInstance },
  TSource = any
> {
  name?: never; // FORBID TO USE `name` KEY, cause it introduce confusion for developers
  type: ComposeOutputTypeDefinition<TContext>;
  args?: {
    [argName in keyof TArgs]: ObjectTypeComposerArgumentConfigDefinition;
  };
  description?: string;
  resolve: (
    source: TSource,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
  ) => any;
  extensions?: {
    complexity:
      | number
      | ((opts: { args: TArgs; childComplexity: number }) => number);
    [key: string]: any;
  };
}
