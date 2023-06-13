import { IsString } from 'class-validator'

export class StringValuePayload {
  @IsString()
  value!: string
}
