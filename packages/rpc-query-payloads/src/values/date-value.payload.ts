import { Timestamp } from '@bufbuild/protobuf'
import { IsDate }    from 'class-validator'

export class DateValuePayload {
  @IsDate()
  value!: Date

  constructor(value?: Date | Timestamp) {
    if (value instanceof Timestamp) {
      this.value = value.toDate()
    } else {
      this.value = value!
    }
  }
}
