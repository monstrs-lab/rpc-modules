import { Transform } from 'class-transformer'

export const JsonToStringTransform = (): PropertyDecorator =>
  Transform(({ value }: { value: object }): string => JSON.stringify(value))
