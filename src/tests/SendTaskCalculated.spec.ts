
import axios from 'axios'
import TaskServices from '@infraestructure/services/TaskServices'
import { SendTaskCalculated } from '@application/usecases/send-task-calculated/SendTaskCalculated'
import config from '@config/config.json'

test('SendTaskCalculated should retun Right', async () => {
  const instance = axios.create(config.httpConfig)
  const taskServices = new TaskServices(instance)
  const sendTaskCalculated = new SendTaskCalculated(taskServices)
  const response = await sendTaskCalculated.handle()
  expect(response.value).toBe('Correct')
})
