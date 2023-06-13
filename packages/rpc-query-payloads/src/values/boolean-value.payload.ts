import { IsBoolean } from 'class-validator'

export class BooleanValuePayload {
  @IsBoolean()
  value!: boolean
}
