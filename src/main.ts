import axios from 'axios'
import config from '@config/config.json'
import { SendTaskCalculated } from '@application/usecases/send-task-calculated/SendTaskCalculated'
import TaskServices from '@infraestructure/services/TaskServices'

function main () {
  const instance = axios.create(config.httpConfig)
  const taskServices = new TaskServices(instance)
  const sendTaskCalculated = new SendTaskCalculated(taskServices)

  setInterval(async () => {
    const response = await sendTaskCalculated.handle()
    if (response.isLeft()) {
      console.log(`Error: ${response.value.message}  - to submit task`)
    } else {
      console.log('Sucess to submit task - ', response.value)
    }
  }, config.poolingTime)
}

main()
