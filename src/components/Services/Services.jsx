import Squares from "../svg/Squares"
import Triangles from "../svg/Triangles"
import SquareCon from "../svg/SquareCon"
import Service from "./Service"
import TrianglesMbl from "../svg/TrianglesMbl"
import SquareConMbl from "../svg/SquareConMbl"
import SquaresMbl from "../svg/SquaresMbl"
import { useWindowWidth } from "../../hooks/useScreenWidth"
import { useAnimateOnScroll } from "../../hooks/useAnimateOnScroll"
import { motion } from "framer-motion"

const parent = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.8,
      type: "tween"
    }
  }
}

const parentMbl = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.8,
      type: "tween"
    }
  }
}

const data = {
  "lowerHeadingText": "Our Services",
  "services": [
    {
      "icon": <Squares />,
      "iconMbl": <SquaresMbl />,
      "heading": "UI / UX Design",
      "description": "Crafting intuitive, user-centric interfaces that captivate and delight, ensuring seamless user experiences and brand loyalty."
    },
    {
      "icon": <Triangles />,
      "iconMbl": <TrianglesMbl />,
      "heading": "Web Development",
      "description": "Crafting responsive, adaptable websites with advanced technologies for seamless operation and peak performance."
    },
    {
      "icon": <SquareCon />,
      "iconMbl": <SquareConMbl />,
      "heading": "Copy Writing",
      "description": "Crafting compelling, persuasive content tailored to your target audience, enhancing brand image and driving engagement."
    }
  ]
}

const Services = () => {
  const screenWidth = useWindowWidth()
  const { parentRef, control } = useAnimateOnScroll(0.7)

  return (
    <section
      className="services"
      id="services"
    >
      <div className="services__upper">
        {data?.services.map((el, index) => {
          return (
            <Service
              key={index}
              serviceIcon={
                screenWidth <= 767 ?
                  el?.iconMbl
                  :
                  el?.icon
              }
              serviceHeading={el?.heading}
              serviceDescription={el?.description}
            />
          )
        })}
      </div>
      <div className="services__lower">
        <motion.h2
          ref={parentRef}
          initial="hidden"
          animate={control}
          variants={screenWidth <= 1000 ? parentMbl : parent}
        >
          {data?.lowerHeadingText}
        </motion.h2>
      </div>
    </section>
  )
}

export default Services