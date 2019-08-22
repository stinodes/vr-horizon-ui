export const throttle = <Args>(
  callback: (...args: Args[]) => any,
  wait: number = 100,
  immediate: boolean = false,
): ((...args: Args[]) => any) => {
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
