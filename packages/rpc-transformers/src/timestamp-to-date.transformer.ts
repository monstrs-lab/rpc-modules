import { Timestamp } from '@bufbuild/protobuf'
import { Transform } from 'class-transformer'

export const TimestampToDateTransform = (): PropertyDecorator =>
  Transform(({ value }: { value: Date }): any => {
    if (value instanceof Timestamp) {
      return value.getDate()
    }

    if (value?.getDate) {
      return value.getDate()
    }

    if (!value) {
      return undefined
    }

    return value
  })
