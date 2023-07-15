import { Timestamp } from '@bufbuild/protobuf'
import { Transform } from 'class-transformer'

export const TimestampToDateTransform = (): PropertyDecorator =>
  Transform(({ value }: { value: Timestamp }): Date | undefined => {
    if (value instanceof Timestamp) {
      return value.toDate()
    }

    return undefined
  })
