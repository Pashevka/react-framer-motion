import Cta from "./Cta"
import ArrowCurve from "./svg/ArrowCurve"
import RightArrow from "./svg/RightArrow"
import ArrowCurveMbl from "./svg/ArrowCurveMbl"
import { useWindowWidth } from "../hooks/useScreenWidth"
import RightArrowMbl from "./svg/RightArrowMbl"
import { motion } from "framer-motion"
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll"

const parent = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.2,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  }
}

const upper = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, x: -200,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  }
}

const upperMbl = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.6,
      type: "tween",
      delay: 0.1
    }
  },
  hidden: {
    opacity: 0, x: -100,
    transition: {
      duration: 0.6,
      type: "tween"
    }
  }
}

const lower = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, x: 200,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  }
}

const lowerMbl = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.6,
      type: "tween",
      delay: 0.1
    }
  },
  hidden: {
    opacity: 0, x: 100,
    transition: {
      duration: 0.6,
      type: "tween",
    }
  }
}

const buttonMbl = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      type: "tween",
      delay: 0.1
    }
  },
  hidden: {
    opacity: 0, y: 40,
    transition: {
      duration: 0.6,
      type: "tween"
    }
  }
}

const commonVariant = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      type: "tween",
    }
  },
  hidden: {
    opacity: 0, y: 40,
    transition: {
      duration: 0.6,
      type: "tween"
    }
  }
}

const data = {
  "lowerTextHeading01": "Who are we",
  "lowerTextHeading02": "Digital artisans crafting web wonders.",
  "upperTextPara": "Our agency fuses creativity and technology, crafting unique digital experiences. Our expert team specializes in bespoke websites that propel businesses to online success. Let us transform your vision into an engaging web masterpiece.",
  "contactCta": "Contact Us",
  "arrowCurve": <ArrowCurve />,
  "arrowCurveMbl": <ArrowCurveMbl />,
  "rightArrow": <RightArrow />,
  "rightArrowMbl": <RightArrowMbl />,
  "contactCtaLink": "footer"
}

const About = () => {
  const screenWidth = useWindowWidth()
  const { parentRef, control } = useAnimateOnScroll(0.6)
  const { parentRef: upperRef, control: upperControl } = useAnimateOnScroll(0.5)
  const { parentRef: lowerRef, control: lowerControl } = useAnimateOnScroll(0.5)
  const { parentRef: buttonRef, control: buttonControl } = useAnimateOnScroll(0.4)
  const { parentRef: headingRef, control: controlHeading } = useAnimateOnScroll(0.2)

  return (
    <>
      {screenWidth <= 1000 ?
        <section
          className="about"
          id="about"
        >
          <div
            className="about__upper"
          >
            <motion.h3 className="about__upper__heading-small"
              ref={headingRef}
              initial={"hidden"}
              animate={controlHeading}
              variants={commonVariant}
            >
              {data?.lowerTextHeading01}
            </motion.h3>
            <motion.div
              ref={upperRef}
              initial={"hidden"}
              animate={upperControl}
              variants={upperMbl}
            >
              <h2 className="about__upper__heading-large">{data?.lowerTextHeading02}</h2>
              <span>
                {screenWidth <= 1000 ?
                  <>{data?.arrowCurveMbl}</>
                  :
                  <>{data?.arrowCurve}</>
                }
              </span>
            </motion.div>
          </div>
          <div
            className="about__lower"
          >
            <motion.p className="about__lower__para"
              ref={lowerRef}
              initial={"hidden"}
              animate={lowerControl}
              variants={lowerMbl}
            >
              {data?.upperTextPara}
            </motion.p>
            <motion.div className="about__lower__cta"
              ref={buttonRef}
              initial={"hidden"}
              animate={buttonControl}
              variants={buttonMbl}
            >
              <Cta
                ctaText={data?.contactCta}
                ctaKey="about"
                ctaIcon={
                  screenWidth <= 767 ?
                    data?.rightArrowMbl
                    :
                    data?.rightArrow
                }
                ctaGap={
                  screenWidth <= 767 ?
                    2
                    :
                    2.5
                }
                ctaLink={data?.contactCtaLink}
              />
            </motion.div>
          </div>
        </section>
        :
        <motion.section
          className="about"
          id="about"
          ref={parentRef}
          initial="hidden"
          animate={control}
          variants={parent}
        >
          <motion.div
            className="about__upper"
            variants={upper}
          >
            <h3 className="about__upper__heading-small">{data?.lowerTextHeading01}</h3>
            <div>
              <h2 className="about__upper__heading-large">{data?.lowerTextHeading02}</h2>
              <span>
                {screenWidth <= 1000 ?
                  <>{data?.arrowCurveMbl}</>
                  :
                  <>{data?.arrowCurve}</>
                }
              </span>
            </div>
          </motion.div>
          <motion.div
            className="about__lower"
            variants={lower}
          >
            <p className="about__lower__para">{data?.upperTextPara}</p>
            <div className="about__lower__cta">
              <Cta
                ctaText={data?.contactCta}
                ctaKey="about"
                ctaIcon={
                  screenWidth <= 767 ?
                    data?.rightArrowMbl
                    :
                    data?.rightArrow
                }
                ctaGap={
                  screenWidth <= 767 ?
                    2
                    :
                    2.5
                }
                ctaLink={data?.contactCtaLink}
              />
            </div>
          </motion.div>
        </motion.section>
      }
    </>
  )
}

export default About