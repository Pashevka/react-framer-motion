import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { useWindowWidth } from "../hooks/useScreenWidth"

const Cta = ({
  ctaText,
  ctaKey,
  ctaLink,
  ctaIcon = "",
  ctaGap = "",
  email = "",
  setActive = ""
}) => {
  const [dataClasses, setDataClasses] = useState(() => null)
  const screenWidth = useWindowWidth()

  useEffect(() => {
    switch (ctaKey) {
      case "nav":
        setDataClasses("nav-cta")
        break

      case "hero":
        setDataClasses("hero-cta")
        break

      case "about":
        setDataClasses("about-cta")
        break

      case "footer":
        setDataClasses("footer-cta")
        break

      default:
        break
    }
  }, [])

  return (
    <button
      className={`cta-reset ${dataClasses}`}
    >
      {email
        ?
        <a
          href={`mailto:${email}`}
          className={ctaIcon ? "cta-icon" : null}
          style={{ gap: ctaIcon && `${ctaGap}rem` }}
        >
          {ctaText}
          {ctaIcon && ctaIcon}
        </a>
        :
        <Link
          to={ctaLink}
          spy={true}
          smooth={true}
          className={ctaIcon ? "cta-icon" : null}
          style={{ gap: ctaIcon && `${ctaGap}rem` }}
          offset={
            screenWidth <= 1130 ?
              -90
              :
              null
          }
          onClick={
            ctaKey === "nav" &&
              screenWidth <= 1130 ?
              () => setActive(false)
              :
              null
          }
        >
          {ctaText}
          {ctaIcon && ctaIcon}
        </Link>
      }
    </button>
  )
}

export default Cta