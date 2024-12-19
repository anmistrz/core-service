import CSchedulers from "@/controllers/shcedulers.controller";
import { Router } from "express";

const shcedulerRouter = Router();

shcedulerRouter.post("/start", CSchedulers.schedulersController);

export default shcedulerRouter;