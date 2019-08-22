import { path, split } from 'ramda'

type Errors = { [name: string]: null | string }
type Touched = { [name: string]: boolean }
export const error = (
  name: string,
  { errors, touched }: { errors: Errors; touched: Touched },
) => path(split('.', name), touched) && path(split('.', name), errors)

export const isValid = (
  name: string,
  form: { errors: Errors; touched: Touched },
) => !!error(name, form)

export const errorOutline = (
  name: string,
  form: { errors: Errors; touched: Touched },
) => (isValid(name, form) ? 'fadedError' : undefined)
