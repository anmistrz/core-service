import prisma from "@/prisma/clients/core.client"
import { CustomError } from "@/utils"
import { ITask } from "@/interfaces/task.interface"

const createTask = async (data: Pick<ITask, "title" | "description" | "assigneeId" | "projectId" | "status">) => {
    
    const { title, description, assigneeId, projectId, status } = data

    const task = await prisma.task.create({
        data: {
            title,
            description,
            assigneeId,
            projectId,
            status,
            dueDate: new Date(),
        }, select: {
            id: true,
            title: true,
            description: true,
            assigneeId: true,
            projectId: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        }
    })

    return task
}

export default {
    createTask,
}
