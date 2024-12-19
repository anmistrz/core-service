export interface ITask {
    id: string
    title: string
    description: string
    status: string
    assigneeId: string
    projectId: string
    createdAt: Date
    updatedAt: Date
}