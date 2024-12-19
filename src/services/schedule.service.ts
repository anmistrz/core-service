import cron from "node-cron"

const job = cron.schedule("*/10 * * * * *", () => {
    console.log("[SCHEDULER] - Running every 10 second")
}, {
    scheduled: false
})

const schedulers = (isStart: boolean) => {

    console.log("isStart", isStart)

    if (isStart) {
        console.log("Job started")
        job.start()
        return {
            status: "Job started"
        }
    } else {
        job.stop()
        console.log("Job stopped")
        return {
            status: "Job stopped"
        }
    }
}

const SSchedulers = {
    schedulers
}

export default SSchedulers