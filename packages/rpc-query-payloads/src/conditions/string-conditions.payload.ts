import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { StringValuePayload }  from '../values/index.js'
import { StringsValuePayload } from '../values/index.js'

export class StringConditionsPayload {
  @IsOptional()
  @ValidateNested()
  contains?: StringValuePayload

  @IsOptional()
  @ValidateNested()
  eq?: StringValuePayload;

  @IsOptional()
  @ValidateNested()
  in?: StringsValuePayload
}
