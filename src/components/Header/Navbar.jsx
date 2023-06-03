import { Link } from "react-router-dom"
import Logo from "../svg/Logo"
import Cta from "../Cta"
import NavLinks from "./NavLinks"
import { useWindowWidth } from "../../hooks/useScreenWidth"
import Hamburger from "../svg/Hamburger"
import { useState } from "react"
import Close from "../svg/Close"
import { motion, AnimatePresence } from "framer-motion"

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 0.3,
      type: "tween"
    }
  },
  exit: {
    x: 500,
    transition: {
      duration: 0.3,
      type: "tween"
    }
  }
}

const data = {
  "logo": <Logo />,
  "logoText": "Logo",
  "navCtaText": "Contact Us",
  "navCtaLink": "footer"
}

const Navbar = () => {
  const screenWidth = useWindowWidth()
  const [active, setActive] = useState(() => false)

  return (
    <section className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <span>
            {data?.logo}
          </span>
          <h1 className="navbar__logo__text">
            {data?.logoText}
          </h1>
        </Link>
      </div>
      {screenWidth <= 1130 ?
        <>
          <div className="navbar__hamburger">
            {!active ?
              <Hamburger
                onClick={() => setActive(true)}
              />
              :
              <Close
                onClick={() => setActive(false)}
              />
            }
          </div>
          {
            <>
              <AnimatePresence>
                {
                  active ?
                    <motion.section
                      className="nav-mbl-wrapper"
                      key="mobile-nav"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={variants}
                    >
                      <nav className="nav-mbl">
                        <NavLinks
                          setActive={setActive}
                          isHeaderNav={true}
                        />
                      </nav>
                      <div className="nav-mbl-cta">
                        <Cta
                          ctaText={data?.navCtaText}
                          ctaKey="nav"
                          ctaLink={data?.navCtaLink}
                          setActive={setActive}
                        />
                      </div>
                    </motion.section>
                    :
                    null
                }
              </AnimatePresence>
            </>
          }
        </>
        :
        <>
          <nav className="navbar__nav">
            <NavLinks />
          </nav>
          <div className="navbar__cta">
            <Cta
              ctaText={data?.navCtaText}
              ctaKey="nav"
              ctaLink={data?.navCtaLink}
            />
          </div>
        </>
      }
    </section>
  )
}

export default Navbar