console.log("hello world");

import fastify from "fastify";

const server = fastify({logger: true});

const teams =[
    {id: 1, name: "McLaren", base: "Woking, United Kingdom"}, 
    {id: 2, name: "Mercedes", base: "Brackley, United Kingdom"},
    {id: 3, name: "Ferrari", base: "Maranello, Italy"},
    {id: 4, name: "Red Bull Racingerdeces", base: "Milton Keynes, United Kingdom"},
];

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Lewis Hamilton", team: "Ferrari"},
    {id: 3, name: "Lando Norris", team: "Mclaren"},
    {id: 4, name: "George Russell", team: "Mercedes"},
]

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200);
    return[teams];
});

server.get ("/drivers", async(request, response) => {
    response.type("application/json").code(200);
    return [drivers];
});

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt (request.params.id);
    const driver = drivers.find( d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return {message: "Driver Not Found"}
    } else {
        response.type("application/json").code(200);
        return{ driver };
    }
});


server.listen({port: 3636}, () => {
    console.log ("Server init");
});

