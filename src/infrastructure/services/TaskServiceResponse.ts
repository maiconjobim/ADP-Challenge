import { IncorrectValueResultError } from './erros/IncorrectValueResultError'
import { Either } from 'src/utils/either'
import { NotfoundSpecifiedIdError } from './erros/NotfoundSpecifiedIdError'
import { SubmitTask } from '@application/models/SubmitTask'

export type TaskResponse = Either<IncorrectValueResultError | NotfoundSpecifiedIdError, SubmitTask>
