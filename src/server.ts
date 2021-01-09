import express from "express";
import { ApolloServer } from "apollo-server-express";
import { express as voyagerMiddleware } from "graphql-voyager/middleware";

import { createInstance } from "./verdor/axios";
import { schema } from "./schema";
import { customTracingPlugin } from "./plugins/customTracingPlugin";
import { durationPlugin } from "./plugins/durationPlugin";
import { queryCostPlugin } from "./plugins/queryCostPlugin";

const PORT = 4000;
const app = express();
const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => {
    const Authorization = req?.headers?.authorization;
    const axios = createInstance({ Authorization });
    const context = { axios };

    return context;
  },
  tracing: true,
  plugins: [
    process.env.DISABLE_QUERY_COST
      ? null
      : queryCostPlugin({
          schema,
          maxComplexity: process.env.MAX_QUERY_COMPLEXITY || 100000,
        }),
    process.env.DISABLE_TRACING ? null : durationPlugin(),
    process.env.DISABLE_TRACING ? null : customTracingPlugin(),
  ].filter(Boolean) as any,
});

const GRAPHQL_ENDPOINT = "/graphql";

app.use(
  "/voyager",
  voyagerMiddleware({
    endpointUrl: GRAPHQL_ENDPOINT,
  })
);

app.use(
  apolloServer.getMiddleware({
    path: GRAPHQL_ENDPOINT,
    disableHealthCheck: true,
    cors: {
      credentials: true,
      origin: (origin: string | undefined, callback: any) =>
        callback(null, true),
    },
  })
);

app.listen(PORT, () => {
  console.log(`🚀 Server ready! Pid: ${process.pid}
   Working links:
    - http://localhost:${PORT}/graphql
    - http://localhost:${PORT}/voyager
  `);
});
