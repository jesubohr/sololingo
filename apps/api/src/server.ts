import Fastify from "fastify"
import cors from "@fastify/cors"

const app = Fastify({ logger: true })

await app.register(cors, { origin: true })

app.get("/health", async () => {
  return { status: "ok" }
})

const PORT = Number(process.env.PORT) || 3001

try {
  await app.listen({ port: PORT, host: "0.0.0.0" })
  console.log(`API server running on port ${PORT}`)
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
