import { OperationEnum } from './OperationEnum'

export interface ICalculateTask {

  calculate(left: number, right: number, operation: OperationEnum): number

  division (left: number, right: number):number

  addition (left: number, right: number):number

  subtraction (left: number, right: number):number

  multiplication (left: number, right: number):number

  remainder (left: number, right: number):number
}
