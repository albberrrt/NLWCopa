// Importações
import Fastify from "fastify";
import cors from "@fastify/cors";
import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import { PrismaClient } from "@prisma/client";

// Cria novo objeto Prisma
const prisma = new PrismaClient({
  log: ["query"],
});

// Função bootstrap() inicia o servidor na porta: 3333
async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  // Contagem de Bolôes
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });
  // Contagem de Usuários
  fastify.get("/users/count", async () => {
    const count = await prisma.user.count();

    return { count };
  });
  // Contagem de Palpites
  fastify.get("/guesses/count", async () => {
    const count = await prisma.guess.count();

    return { count };
  });

  // Cria um novo Bolão
  fastify.post("/pools", async (request, reply) => {
    const createPoolBody = z.object({
      title: z.string(),
    });

    const generate = new ShortUniqueId({ length: 6 }); // Cria novo objeto ShortUniqueId()
    const code = String(generate()).toUpperCase(); // Cria o código do Bolão usando ShortUniqueId()

    const { title } = createPoolBody.parse(request.body); // Armazena o valor da request em title

    //Cria o Bolão com os valores do code e do title
    await prisma.pool.create({
      data: {
        title,
        code,
      },
    });

    return reply.status(201).send({ code }); // Retorna status 201 e o valor do code
  });
 
  await fastify.listen({ port: 3333 /*host: "0.0.0.0"*/ });
}

bootstrap();
