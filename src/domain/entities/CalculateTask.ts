import { ICalculateTask } from './ICalculateTask'
import BigNumber from 'bignumber.js'
import { OperationEnum } from './OperationEnum'

export class CalculateTask implements ICalculateTask {
  calculate (left: number, right: number, operation: OperationEnum) {
    const strategy = {
      division: this.division(left, right),
      addition: this.addition(left, right),
      subtraction: this.subtraction(left, right),
      multiplication: this.multiplication(left, right),
      remainder: this.remainder(left, right)
    }
    return strategy[operation]
  }

  division (left: number, right: number):number {
    const _left = new BigNumber(left).precision(16)
    const _right = new BigNumber(right).precision(16)

    return _left.dividedBy(_right).toNumber()
  }

  addition (left: number, right: number):number {
    const _left = new BigNumber(left).precision(16)
    const _right = new BigNumber(right).precision(16)

    return _left.plus(_right).toNumber()
  }

  subtraction (left: number, right: number):number {
    const _left = new BigNumber(left).precision(16)
    const _right = new BigNumber(right).precision(16)

    return _left.minus(_right).toNumber()
  }

  multiplication (left: number, right: number) {
    const _left = new BigNumber(left).precision(16)
    const _right = new BigNumber(right).precision(16)

    return _left.multipliedBy(_right).toNumber()
  }

  remainder (left: number, right: number):number {
    const _left = new BigNumber(left).precision(16)
    const _right = new BigNumber(right).precision(16)

    return _left.mod(_right).toNumber()
  }
}
