import type { Query }              from '@monstrs/query-types'

import type { SearchFieldPayload } from './search-field.payload.js'

import { IsString }                from 'class-validator'
import { ValidateNested }          from 'class-validator'

export class SearchPayload implements Query.Search {
  @ValidateNested()
  fields!: Array<SearchFieldPayload>

  @IsString()
  value!: string
}
