import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const useAnimateOnScroll = (inView) => {
  const parentRef = useRef(null)
  const control = useAnimation()

  const isInView = useInView(parentRef, {
    once: false,
    amount: inView,
  })

 
  useEffect(() => {
    if (!parentRef.current) {
      return
    }
    const { top, bottom } = parentRef.current.getBoundingClientRect()
    const shouldBeAnimated = bottom > window.innerHeight;
    console.log("🚀 ~ file: useAnimateOnScroll.jsx:20 ~ useEffect ~ isVisible:", shouldBeAnimated, isInView)
    console.log("🚀 ~ file: useAnimateOnScroll.jsx:27 ~ useEffect ~ isVisible:", { top, bottom, wheight: window.innerHeight })

    if (isInView) {
      control.start("visible")
    } else {

    const { top, bottom } = parentRef.current.getBoundingClientRect()
      const shouldBeAnimated = bottom > window.innerHeight;
      if (shouldBeAnimated && !isInView) {
        control.start("hidden")
      }
    }
  }, [isInView, control])

  return {
    parentRef,
    control
  }
}