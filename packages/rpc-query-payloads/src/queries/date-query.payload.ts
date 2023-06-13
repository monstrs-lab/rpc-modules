import { Query }                 from '@monstrs/query-types'
import { IsEnum }                from 'class-validator'
import { IsOptional }            from 'class-validator'
import { ValidateNested }        from 'class-validator'

import { DateConditionsPayload } from '../conditions/index.js'

export class DateQueryPayload implements Query.DateType {
  @IsOptional()
  @IsEnum(Query.Operator)
  operator?: Query.Operator.AND | Query.Operator.OR | 0 | 1

  @IsOptional()
  @ValidateNested()
  conditions?: DateConditionsPayload
}
