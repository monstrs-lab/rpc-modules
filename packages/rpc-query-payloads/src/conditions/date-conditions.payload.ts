import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { BooleanValuePayload } from '../values/index.js'
import { DateValuePayload }    from '../values/index.js'

export class DateConditionsPayload {
  @IsOptional()
  @ValidateNested()
  exists?: BooleanValuePayload

  @IsOptional()
  @ValidateNested()
  eq?: DateValuePayload
}
