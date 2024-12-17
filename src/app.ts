import express, { NextFunction, Request, Response } from "express"
import { env, loggerWinston } from "@/configs"
import logger from "morgan"
import router from "./routes"
import { errorHandler } from "./middlewares"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: NextFunction) => {
  loggerWinston.info(`[WINSTON] Request - ${req.method} ${req.url}`)
  next()
})

app.use("/", router)

app.use(errorHandler)

app.listen(env.APP.PORT, () => {
  console.log(`[Server] - Listening on port ${env.APP.PORT}`)
})
