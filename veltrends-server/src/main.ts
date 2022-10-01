import Fastify from 'fastify';

const server = Fastify({});

server.get('/ping', async (request, reply) => {
  return 'pong\n';
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
