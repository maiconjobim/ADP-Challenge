import { OperationEnum } from '@domain/entities/OperationEnum'

export class Task {
  id: string;
  operation: OperationEnum;
  left: number;
  right: number;
}
