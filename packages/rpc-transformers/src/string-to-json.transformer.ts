import { Transform } from 'class-transformer'

export const StringToJsonTransform = (): PropertyDecorator =>
  Transform(({ value }: { value: string }): object | null => {
    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  })
