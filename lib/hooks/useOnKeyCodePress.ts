import { useCallback, useEffect } from 'react'
import { converge, nthArg } from 'ramda'

export const useOnKeyCodePress = (
  handler: () => any,
  keyCode: number,
  bound: boolean = true,
) => {
  const closeOnEscPress = useCallback(e => e.keyCode === keyCode && handler(), [
    handler,
  ])
  useEffect(() => {
    if (bound) {
      window.addEventListener('keyup', closeOnEscPress)
      return () => window.removeEventListener('keyup', closeOnEscPress)
    }
  }, [bound])
}
export const useOnEscPress = converge(useOnKeyCodePress, [
  nthArg(0),
  () => 27,
  nthArg(1),
])
