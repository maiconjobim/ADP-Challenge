import { IncorrectValueResultError } from './errors/IncorrectValueResultError'
import { Either } from 'src/utils/either'
import { NotfoundSpecifiedIdError } from './errors/NotfoundSpecifiedIdError'
import { SubmitTask } from '@application/models/SubmitTask'

export type TaskResponse = Either<IncorrectValueResultError | NotfoundSpecifiedIdError, SubmitTask>
