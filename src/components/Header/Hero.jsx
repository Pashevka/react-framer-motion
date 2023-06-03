import Cta from "../Cta"
import Arch from "../svg/Arch"
import Heart from "../svg/Heart"
import Plane from "../svg/Plane"
import QIcon from "../svg/QIcon"
import Lines from "../svg/Lines"
import { useWindowWidth } from "../../hooks/useScreenWidth"
import { motion } from "framer-motion"
import { useAnimateOnScroll } from "../../hooks/useAnimateOnScroll"

const parent = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1.4,
      delayChildren: 0.6,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween"
    }
  }
}

const lower = {
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.4,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, y: 50,
    transition: {
      duration: 0.4,
      type: "tween"
    }
  }
}

const data = {
  "heroWorkCta": {
    "text": "portfolio",
    "link": "portfolio"
  },
  "heroServicesCta": {
    "text": "Our Services",
    "link": "services"
  },
  "arch": <Arch />,
  "archMbl": <Arch width={63} height={63} />,
  "heart": <Heart />,
  "heartMbl": <Heart width={27.05} height={28} />,
  "plane": <Plane />,
  "planeMbl": <Plane width={33.12} height={39} />,
  "qIcon": <QIcon />,
  "qIconMbl": <QIcon width={66} height={66} />,
  "lines": <Lines />,
  "linesMbl": <Lines width={317.37} height={15} />
}

const Hero = () => {
  const screenWidth = useWindowWidth()
  const { parentRef, control } = useAnimateOnScroll(0.6)

  return (
    <motion.section
      ref={parentRef}
      className="hero"
      initial="hidden"
      animate={control}
      variants={parent}
    >
      <div className="hero__upper">
        <span>
          {screenWidth <= 1200 ?
            <>{data?.archMbl}</>
            :
            <>{data?.arch}</>
          }
        </span>
        <span>
          {screenWidth <= 767 ?
            <>{data?.heartMbl}</>
            :
            <>{data?.heart}</>
          }
        </span>
        <span>
          {screenWidth <= 767 ?
            <>{data?.planeMbl}</>
            :
            <>{data?.plane}</>
          }
        </span>
        <span>
          {screenWidth <= 1200 ?
            <>{data?.qIconMbl}</>
            :
            <>{data?.qIcon}</>
          }
        </span>
        <h2>
          Experience Digital
          <span>
            Excellence
            <span>
              {screenWidth <= 767 ?
                <>{data?.linesMbl}</>
                :
                <>{data?.lines}</>
              }
            </span>
          </span>
          with Our Web Development Agency
        </h2>
      </div>
      <motion.div
        className="hero__lower"
        variants={lower}
      >
        <Cta
          ctaText={data?.heroWorkCta?.text}
          ctaKey="hero"
          ctaLink={data?.heroWorkCta?.link}
        />
        <Cta
          ctaText={data?.heroServicesCta?.text}
          ctaKey="hero"
          ctaLink={data?.heroServicesCta?.link}
        />
      </motion.div>
    </motion.section>
  )
}

export default Hero