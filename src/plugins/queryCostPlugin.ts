// Read apollo-server docs
//   https://www.apollographql.com/docs/apollo-server/integrations/plugins/
// Read graphql-query-complexity docs
//   https://github.com/slicknode/graphql-query-complexity

import type { ApolloServerPlugin } from 'apollo-server-plugin-base';
import { getComplexity, simpleEstimator, fieldExtensionsEstimator } from 'graphql-query-complexity';
import { separateOperations, GraphQLSchema } from 'graphql';

export function queryCostPlugin(opts: {
  schema: GraphQLSchema;
  maxComplexity: number | string;
}): ApolloServerPlugin {
  return {
    requestDidStart: ({ context }) => {
      let complexity = 0;

      // also you may get user from `context` and
      // provide custom `maxComplexity` for him.
      const maxComplexity =
        (typeof opts.maxComplexity === 'string'
          ? parseInt(opts.maxComplexity)
          : opts.maxComplexity) || 100000;
      return {
        didResolveOperation({ request, document }) {
          /**
           * This provides GraphQL query analysis to be able to react on complex queries to your GraphQL server.
           * This can be used to protect your GraphQL servers against resource exhaustion and DoS attacks.
           * More documentation can be found at https://github.com/ivome/graphql-query-complexity.
           */
          complexity = getComplexity({
            // Our built schema
            schema: opts.schema,
            // To calculate query complexity properly,
            // we have to check if the document contains multiple operations
            // and eventually extract it operation from the whole query document.
            query: request.operationName
              ? separateOperations(document)[request.operationName]
              : document,
            // The variables for our GraphQL query
            variables: request.variables,
            // Add any number of estimators. The estimators are invoked in order, the first
            // numeric value that is being returned by an estimator is used as the field complexity.
            // If no estimator returns a value, an exception is raised.
            estimators: [
              fieldExtensionsEstimator(),
              // Add more estimators here...
              // This will assign each field a complexity of 1
              // if no other estimator returned a value.
              simpleEstimator({ defaultComplexity: 1 }),
            ],
          });
          // Here we can react to the calculated complexity,
          // like compare it with max and throw error when the threshold is reached.
          if (complexity >= maxComplexity) {
            throw new Error(
              `Sorry, too complicated query! ${complexity} is over ${maxComplexity} that is the max allowed complexity.`
            );
          }
        },
        willSendResponse({ response }) {
          response.extensions = response.extensions || {};
          response.extensions.complexity = complexity;
          response.extensions.maxComplexity = maxComplexity;
        },
      };
    },
  } as ApolloServerPlugin;
}
