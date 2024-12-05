console.log("hello world");

import fastify from "fastify";

const server = fastify({logger: true});

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200)

    return [{id: 1, name: "ferrari"}];
});

server.listen({port: 3636}, () => {
    console.log ("Server init");
});