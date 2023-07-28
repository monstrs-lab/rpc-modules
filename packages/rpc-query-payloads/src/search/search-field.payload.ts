import type { Query } from '@monstrs/query-types'

import { IsString }   from 'class-validator'

export class SearchFieldPayload implements Query.SearchField {
  constructor(private readonly field: Query.SearchField) {}

  @IsString({ each: true })
  get path(): Array<string> {
    return this.field.path
  }
}
