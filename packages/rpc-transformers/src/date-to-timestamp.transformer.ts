import { Timestamp } from '@bufbuild/protobuf'
import { Transform } from 'class-transformer'

export const DateToTimestampTransform = (): PropertyDecorator =>
  Transform(({ value }: { value: Date }): any => {
    if (value instanceof Date) {
      return Timestamp.fromDate(value)
    }

    if (!value) {
      return undefined
    }

    return value
  })
