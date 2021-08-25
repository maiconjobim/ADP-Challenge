import axios from 'axios'
import { SendTaskCalculated } from '@application/usecases/send-task-calculated/SendTaskCalculated'
import TaskServices from '@infrastructure/services/TaskServices'
require('dotenv').config()

function main () {
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: Number(process.env.TIMEOUT)
  })
  const taskServices = new TaskServices(instance)
  const sendTaskCalculated = new SendTaskCalculated(taskServices)

  setInterval(async () => {
    const response = await sendTaskCalculated.handle()
    if (response.isLeft()) {
      console.log(`Error: ${response.value.message}  - to submit task`)
    } else {
      console.log('Sucess to submit task - ', response.value)
    }
  }, Number(process.env.POOLING_SPAN))
}

main()
