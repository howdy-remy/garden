import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from 'graphql-tools';


import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs/typeDefs";
import Plant  from "./typeDefs/Plant";

import { PrismaClient } from "@prisma/client";

const runServer = () => {
  const prisma = new PrismaClient();


  const schema = makeExecutableSchema({
  typeDefs: [ typeDefs, Plant ],
  resolvers,
});

  const server = new ApolloServer({
    schema,
    context: () => ({
        prisma
    }),
  });

  const port = 4000;
  server.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

runServer();