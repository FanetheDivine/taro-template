import { Suspense, useRef } from "react"

const Test = () => {
  const promiseRef = useRef<Promise<void> | undefined>(new Promise(resolve => {
    setTimeout(resolve, 1000)
    console.log(1)
    promiseRef.current = undefined
  }))
  if (promiseRef.current) throw promiseRef.current
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