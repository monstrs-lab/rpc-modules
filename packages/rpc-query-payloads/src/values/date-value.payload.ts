import { IsDate }                   from 'class-validator'

import { DateToTimestampTransform } from '@monstrs/rpc-transformers'

export class DateValuePayload {
  @IsDate()
  @DateToTimestampTransform()
  value!: Date
}
