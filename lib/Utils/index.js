// @flow
import { path, split } from 'ramda'

export const error = (
  name: string,
  {
    errors,
    touched,
  }: { errors: { [string]: ?string }, touched: { [string]: boolean } },
) => path(split('.', name), touched) && path(split('.', name), errors)

export const isValid = (
  name: string,
  form: { errors: { [string]: ?string }, touched: { [string]: boolean } },
) => !!error(name, form)

export const errorOutline = (
  name: string,
  form: {
    errors: { [string]: ?string },
    touched: { [string]: boolean },
  },
) => (isValid(name, form) ? 'fadedError' : undefined)

export const throttle = <Args>(
  callback: (...Args[]) => any,
  wait?: number = 100,
  immediate?: boolean = false,
): ((...Args[]) => any) => {
  let timeout = null
  let initialCall = true

  return (...args: Args[]) => {
    const callNow = immediate && initialCall
    const next = () => {
      const r = callback(...args)
      timeout = null
      return r
    }

    if (callNow) {
      initialCall = false
      return next()
    }

    if (!timeout) {
      timeout = setTimeout(next, wait)
    }
  }
}
