import { Router } from "express"
import authRouter from "@/routes/auth.routes"
import userRouter from "@/routes/user.routes"
import { authMiddleware } from "@/middlewares"
import shcedulerRouter from "./schedulers.routes"

const router = Router()

router.use("/auth", authRouter)
router.use("/user", authMiddleware, userRouter)
router.use("/scheduler", shcedulerRouter)

export default router
