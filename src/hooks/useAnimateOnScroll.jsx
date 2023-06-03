import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const useAnimateOnScroll = (inView) => {
  const parentRef = useRef(null)
  const control = useAnimation()

  const isInViewWhenScrollDown = useInView(parentRef, {
    once: true,
    amount: inView,
  })

  useEffect(() => {
    if (isInViewWhenScrollDown) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [isInViewWhenScrollDown, control])

  return {
    parentRef,
    control
  }
}