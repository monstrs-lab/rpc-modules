import type { Query } from '@monstrs/query-types'

import { IsInt }      from 'class-validator'

export class PagerPayload implements Query.Pager {
  @IsInt()
  take!: number

  @IsInt()
  offset!: number
}
