import redisClient from '@/configs/redis.config';
import cron from 'node-cron';

const schedule = (cronExpression: string, callBack: () => void) => {
    cron.schedule(cronExpression, callBack, {
        scheduled: true,
        timezone: "Asia/Jakarta"
    }); 
}

const deletedCache = async () => {
    redisClient.flushAll()
    console.log("[REDIS] All cache has been deleted")
}

export {schedule, deletedCache}