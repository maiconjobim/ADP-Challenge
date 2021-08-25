import { ITaskServices } from '@infrastructure/services/ITaskServices'
import { CalculateTask } from '@domain/entities/CalculateTask'
import { SubmitTask } from '@application/models/SubmitTask'
import { ICalculateTask } from '@domain/entities/ICalculateTask'

export class SendTaskCalculated {
  private readonly taskServices : ITaskServices
  private readonly calculateTask : ICalculateTask

  constructor (taskServices : ITaskServices) {
    this.taskServices = taskServices
    this.calculateTask = new CalculateTask()
  }

  async handle () {
    const task = await this.taskServices.GetTask()
    const calculate = this.calculateTask.calculate(task.left, task.right, task.operation)
    const submitTask = new SubmitTask(task.id, calculate)
    const response = await this.taskServices.PostTask(submitTask)

    console.log('==========================')
    console.log(task)
    console.log('Calculation is :', calculate)
    return response
  }
}
