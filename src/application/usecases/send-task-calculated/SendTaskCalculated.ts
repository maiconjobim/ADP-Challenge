import { ITaskServices } from '@infrastructure/services/ITaskServices'
import { CalculateTask } from '@domain/entities/CalculateTask'
import { SubmitTask } from '@application/models/SubmitTask'

export class SendTaskCalculated {
  private readonly taskServices : ITaskServices

  constructor (taskServices : ITaskServices) {
    this.taskServices = taskServices
  }

  async handle () {
    const calculateTask = new CalculateTask()
    const task = await this.taskServices.GetTask()
    const calculate = calculateTask.calculate(task.left, task.right, task.operation)
    const submitTask = new SubmitTask(task.id, calculate)
    const response = await this.taskServices.PostTask(submitTask)

    console.log('==========================')
    console.log(task)
    console.log('Calculation is :', calculate)
    return response
  }
}
