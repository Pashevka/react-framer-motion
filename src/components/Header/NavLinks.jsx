import { Link } from "react-scroll"
import { useWindowWidth } from "../../hooks/useScreenWidth"
import { useAnimateOnScroll } from "../../hooks/useAnimateOnScroll"
import { motion } from "framer-motion"

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.5,
      type: "tween"
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.5,
      type: "tween"
    },
  },
}

const item = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, x: 100,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  },
}

const listDesktop = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "tween"
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
      type: "tween"
    },
  },
}

const itemDesktop = {
  visible: {
    opacity: 1, x: 0,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0, x: 100,
    transition: {
      duration: 0.5,
      type: "tween"
    }
  },
}

const data = {
  "navLinks": [
    {
      "linkText": "Home",
      "href": "header"
    },
    {
      "linkText": "About Us",
      "href": "about"
    },
    {
      "linkText": "Our Services",
      "href": "services"
    },
    {
      "linkText": "Portfolio",
      "href": "portfolio"
    },
    {
      "linkText": "Pricing",
      "href": "pricing"
    }
  ],
}

const NavLinks = ({
  setActive = "",
  isHeaderNav = "",
  animateLinks = false
}) => {
  const screenWidth = useWindowWidth()
  const { parentRef, control } = useAnimateOnScroll(0.1)
  const { parentRef: parentRefDesktop, control: controlDesktop } = useAnimateOnScroll(0.4)

  return animateLinks ? (
    <>
      {screenWidth <= 767 ?
        <motion.ul
          ref={parentRef}
          initial="hidden"
          animate={control}
          variants={list}
        >
          {
            data?.navLinks.map((el, index) => {
              return (
                <motion.li
                  key={index}
                  variants={item}
                >
                  <Link
                    to={el?.href}
                    spy={true}
                    smooth={true}
                    onClick={
                      isHeaderNav &&
                        screenWidth <= 1130
                        ?
                        () => setActive(false)
                        :
                        null
                    }
                    offset={
                      screenWidth <= 1130 ?
                        -90
                        :
                        null
                    }
                  >
                    {el?.linkText}
                  </Link>
                </motion.li>
              )
            })
          }
        </motion.ul>
        :
        <motion.ul
          ref={parentRefDesktop}
          initial="hidden"
          animate={controlDesktop}
          variants={listDesktop}
        >
          {
            data?.navLinks.map((el, index) => {
              return (
                <li
                  key={index}
                >
                  <Link
                    to={el?.href}
                    spy={true}
                    smooth={true}
                    onClick={
                      isHeaderNav &&
                        screenWidth <= 1130
                        ?
                        () => setActive(false)
                        :
                        null
                    }
                    offset={
                      screenWidth <= 1130 ?
                        -90
                        :
                        null
                    }
                  >
                    {el?.linkText}
                  </Link>
                </li>
              )
            })
          }
        </motion.ul>
      }
    </>
  ) : (
    <>
      {
        data?.navLinks.map((el, index) => {
          return (
            <Link
              to={el?.href}
              key={index}
              spy={true}
              smooth={true}
              onClick={
                isHeaderNav &&
                  screenWidth <= 1130
                  ?
                  () => setActive(false)
                  :
                  null
              }
              offset={
                screenWidth <= 1130 ?
                  -90
                  :
                  null
              }
            >
              {el?.linkText}
            </Link>
          )
        })
      }
    </>
  )
}

export default NavLinks