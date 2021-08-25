import { ServicesError } from './ServicesError'

export class NotfoundSpecifiedIdError extends Error implements ServicesError {
  constructor () {
    super('Value not found for specified ID')
    this.name = 'NotfoundspecifiedIdError'
  }
}
