import { Suspense, useRef } from "react"

const Test = () => {
  const isFirstMountedRef = useRef(true)
  if (isFirstMountedRef.current) {
    isFirstMountedRef.current = false
    throw new Promise<void>(resolve => {
      console.log(1)
      setTimeout(() => {
        resolve()
        console.log(3)
      }, 3000)
    })
  }
  console.log(2)
  return <h1 className='text-red-500'>test</h1>
}

const TestSuspense = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Test />
    </Suspense>
  )
}

export { TestSuspense }