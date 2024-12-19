import SSchedulers from "@/services/schedule.service"
import { Request, Response, NextFunction } from "express"

const schedulersController =  (req: Request, res: Response, next: NextFunction) => {

    try {
        const { isStart } = req.body

        const result =  SSchedulers.schedulers(isStart)

        res.json({
            success: true,
            message: "Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const CSchedulers = {
    schedulersController
}

export default CSchedulers