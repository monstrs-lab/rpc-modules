import type { Query } from '@monstrs/query-types'

import { IsString }   from 'class-validator'

export class SearchFieldPayload implements Query.SearchField {
  @IsString({ each: true })
  path!: Array<string>
}
