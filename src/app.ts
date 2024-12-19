import express, { NextFunction, Request, Response } from "express"
import { env, loggerWinston } from "@/configs"
import logger from "morgan"
import router from "./routes"
import { errorHandler } from "./middlewares"
import { schedule } from "node-cron"
import { deletedCache } from "./schedulers"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: NextFunction) => {
  loggerWinston.info(`[WINSTON] Request - ${req.method} ${req.url}`)
  next()
})

// schedule("*/5 * * * * *", () => {
//   console.log("[SCHEUDLER] - Running every 5 second")
// })

// schedule("*/10 * * * * *", () => {
//   console.log("[SCHEUDLER] - Running every 10 second")
// })

// schedule("*/30 * * * * *", () => {
//   console.log("[SCHEUDLER] - Running every 15 second")
//   deletedCache()
// })


app.use("/", router)

app.use(errorHandler)

app.listen(env.APP.PORT, () => {
  console.log(`[Server] - Listening on port ${env.APP.PORT}`)
})
