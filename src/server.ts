import Fastify from 'fastify';

const app = Fastify()

app.get("/", () => {
  return "aaaa"
})

app.listen({
  port: 3333,
})