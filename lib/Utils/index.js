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
