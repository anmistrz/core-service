import { createClient, RedisClientOptions } from "redis"
import env from "./env.config"

const redisConfig: RedisClientOptions = {
  socket: {
    host: env.REDIS.HOST,
    port: +env.REDIS.PORT,
  },
  // username: env.REDIS.USERNAME,
  // password: env.REDIS.PASSWORD,
}

const redisClient = createClient(redisConfig)

redisClient.on("error", (err) => console.error("[Redis] - Error,", err))

redisClient.connect().then(() => console.log("[Redis] - Connected"))

export default redisClient
