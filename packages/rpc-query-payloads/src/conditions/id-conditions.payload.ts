import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { BooleanValuePayload } from '../values/index.js'
import { StringValuePayload }  from '../values/index.js'
import { StringsValuePayload } from '../values/index.js'

export class IdConditionsPayload {
  @IsOptional()
  @ValidateNested()
  exists?: BooleanValuePayload

  @IsOptional()
  @ValidateNested()
  eq?: StringValuePayload;

  @IsOptional()
  @ValidateNested()
  in?: StringsValuePayload
}
