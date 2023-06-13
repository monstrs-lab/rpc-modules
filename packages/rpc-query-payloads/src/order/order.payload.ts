import { Query }    from '@monstrs/query-types'
import { IsString } from 'class-validator'
import { IsEnum }   from 'class-validator'

export class OrderPayload implements Query.Order {
  @IsString()
  field!: string

  @IsEnum(Query.OrderDirection)
  direction!: Query.OrderDirection.ASC | Query.OrderDirection.DESC | 0 | 1
}
