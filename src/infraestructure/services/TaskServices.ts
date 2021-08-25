import { AxiosInstance } from 'axios'
import { left, right } from '../../utils/either'
import { IncorrectValueResultError } from './erros/IncorrectValueResultError'
import { NotfoundSpecifiedIdError } from './erros/NotfoundSpecifiedIdError'
import { ITaskServices } from './ITaskServices'
import { TaskResponse } from './TaskServiceResponse'
import { Task } from '@application/models/Task'
import { SubmitTask } from '@application/models/SubmitTask'

class TaskServices implements ITaskServices {
  private readonly axios: AxiosInstance;

  constructor (axios: AxiosInstance) {
    this.axios = axios
  }

  async GetTask (): Promise<Task> {
    const task = await this.axios.get<Task>('get-task')
    return task.data
  }

  async PostTask (submitTask: SubmitTask): Promise<TaskResponse> {
    const response = await this.axios.post<TaskResponse>('submit-task', submitTask)
      .then((submittedTask) => right(submittedTask.data))
      .catch((error) => {
        if (error.response.status === 400) {
          return left(new IncorrectValueResultError())
        }
        if (error.response.status === 401) {
          return left(new NotfoundSpecifiedIdError())
        }
        return left(new NotfoundSpecifiedIdError())
      })

    return response as TaskResponse
  }
}

export default TaskServices
