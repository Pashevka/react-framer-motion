const Hamburger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={23}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2.813}
      d="M1.625 2.125h33.75M1.625 11.5h33.75m-33.75 9.375h33.75"
    />
  </svg>
)

export default Hamburger
