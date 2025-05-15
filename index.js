const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { ApolloGateway, IntrospectAndCompose } = require('@apollo/gateway');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const cors = require('cors');
const http = require('http');

async function startApolloServer() {
    // Gateway setup for federation
    const gateway = new ApolloGateway({
        supergraphSdl: new IntrospectAndCompose({
            subgraphs: [
                { name: 'ggwp', url: 'http://localhost:8080/query' }
            ]
        })
    });

    // Create Apollo Server
    const server = new ApolloServer({
        gateway,
        introspection: true,
    });

    // Start the server
    const app = express();
    const httpServer = http.createServer(app);
    
    await server.start();
    
    app.use(
        '/',
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        })
    );
    
    const PORT = 4000;
    httpServer.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/`);
        console.log(`🚀 Apollo Studio/Sandbox available at http://localhost:${PORT}/`);
    });
}

startApolloServer().catch(console.error);