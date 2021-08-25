import { TaskResponse } from './TaskServiceResponse'
import { Task } from '@application/models/Task'
import { SubmitTask } from '@application/models/SubmitTask'

export interface ITaskServices {
  GetTask (): Promise<Task>
  PostTask (submitTask: SubmitTask): Promise<TaskResponse>
}
