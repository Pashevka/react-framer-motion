import { useAnimateOnScroll } from "../../hooks/useAnimateOnScroll"
import { motion } from "framer-motion"
import { useWindowWidth } from "../../hooks/useScreenWidth"

const wrapperContainer = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, y: 20,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  }
}

const wrapperContainerMbl = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.7,
      type: "tween",
      delay: 0.1
    }
  },
  hidden: {
    opacity: 0, y: 20,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  }
}

const iconVariant = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, x: -50,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  }
}

const iconVariantMbl = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.7,
      type: "tween",
      delay: 0.1
    }
  },
  hidden: {
    opacity: 0, x: -50,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  }
}

const commonVariant = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, y: 10,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  }
}

const commonVariantMbl = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.7,
      type: "tween",
      delay: 0.1
    }
  },
  hidden: {
    opacity: 0, y: 10,
    transition: {
      duration: 0.7,
      type: "tween"
    }
  }
}

const Service = ({
  serviceIcon,
  serviceHeading,
  serviceDescription
}) => {
  const screenWidth = useWindowWidth()
  const { parentRef: serviceRef, control: serviceControl } = useAnimateOnScroll(0.2)
  const { parentRef: iconRef, control: iconControl } = useAnimateOnScroll(0.7)
  const { parentRef: headingRef, control: headingControl } = useAnimateOnScroll(0.8)
  const { parentRef: desRef, control: desControl } = useAnimateOnScroll(0.8)

  return (
    <motion.div
      className="service"
      ref={serviceRef}
      initial="hidden"
      animate={serviceControl}
      variants={screenWidth <= 1000 ? wrapperContainerMbl : wrapperContainer}
    >
      <motion.div className="service__icon"
        ref={iconRef}
        initial="hidden"
        animate={iconControl}
        variants={screenWidth <= 1000 ? iconVariantMbl : iconVariant}
      >
        <span>{serviceIcon}</span>
      </motion.div>
      <div className="service__info">
        <motion.h2 className="service__info__heading"
          ref={headingRef}
          initial="hidden"
          animate={headingControl}
          variants={screenWidth <= 1000 ? commonVariantMbl : commonVariant}
        >
          {serviceHeading}
        </motion.h2>
        <motion.p className="service__info__description"
          ref={desRef}
          initial="hidden"
          animate={desControl}
          variants={screenWidth <= 1000 ? commonVariantMbl : commonVariant}
        >
          {serviceDescription}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Service