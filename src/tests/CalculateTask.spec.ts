import { CalculateTask } from '@domain/entities/CalculateTask'
import { OperationEnum } from '@domain/entities/OperationEnum'

describe('Domain', () => {
  test('remainder should be retun valid number', async () => {
    const useCase = new CalculateTask()
    const calculate = useCase.calculate(-8941586513857071, 8570309134203425, OperationEnum.remainder)
    expect(calculate).toBe(-371277379653646)
  })

  test('addition should be retun valid number', async () => {
    const useCase = new CalculateTask()
    const calculate = useCase.calculate(-8941586513857071, 8570309134203425, OperationEnum.addition)
    expect(calculate).toBe(-371277379653646)
  })

  test('division  should be retun valid number', async () => {
    const useCase = new CalculateTask()
    const calculate = useCase.calculate(-8941586513857071, 8570309134203425, OperationEnum.division)
    expect(calculate).toBe(-1.0433213521052476)
  })

  test('multiplication calculate should be retun valid number', async () => {
    const useCase = new CalculateTask()
    const calculate = useCase.calculate(-8941586513857071, 8570309134203425, OperationEnum.multiplication)
    expect(calculate).toBe(-7.663216057397942e+31)
  })

  test('subtraction should be retun valid number', async () => {
    const useCase = new CalculateTask()
    const calculate = useCase.calculate(-8941586513857071, 8570309134203425, OperationEnum.subtraction)
    expect(calculate).toBe(-17511895648060496)
  })
})
