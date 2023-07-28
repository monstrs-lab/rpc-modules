import { IsDate } from 'class-validator'

export class DateValuePayload {
  @IsDate()
  value!: Date

  constructor(value: Date) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.value = (value as any)?.toDate() || value
  }
}
