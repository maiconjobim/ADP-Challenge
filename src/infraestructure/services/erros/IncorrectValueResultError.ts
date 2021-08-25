import { ServicesError } from './ServicesError'

export class IncorrectValueResultError extends Error implements ServicesError {
  constructor () {
    super('Incorrect Value Result')
    this.name = 'IncorrectValueResultError'
  }
}
