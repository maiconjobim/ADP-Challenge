
import axios from 'axios'
import TaskServices from '@infrastructure/services/TaskServices'
import { SendTaskCalculated } from '@application/usecases/send-task-calculated/SendTaskCalculated'
require('dotenv').config()

test('SendTaskCalculated should retun Right', async () => {
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: Number(process.env.TIMEOUT)
  })
  const taskServices = new TaskServices(instance)
  const sendTaskCalculated = new SendTaskCalculated(taskServices)
  const response = await sendTaskCalculated.handle()
  expect(response.value).toBe('Correct')
})
