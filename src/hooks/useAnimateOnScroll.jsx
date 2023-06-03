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
    if (isInView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [isInView, control])

  return {
    parentRef,
    control
  }
}