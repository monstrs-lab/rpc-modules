import { Query }               from '@monstrs/query-types'
import { IsEnum }              from 'class-validator'
import { IsOptional }          from 'class-validator'
import { ValidateNested }      from 'class-validator'

import { IdConditionsPayload } from '../conditions/index.js'

export class IdQueryPayload implements Query.IDType {
  @IsOptional()
  @IsEnum(Query.Operator)
  operator?: Query.Operator.AND | Query.Operator.OR | 0 | 1

  @IsOptional()
  @ValidateNested()
  conditions?: IdConditionsPayload
}
