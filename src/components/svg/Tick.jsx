const Tick = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width ? props?.width : 50}
    height={props?.height ? props?.height : 50}
    viewBox="0 0 50 50"
    fill="none"
    {...props}
  >
    <circle cx={25} cy={25} r={25} fill="#FFFF76" />
    <path
      fill="#000"
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.111}
      d="M39.368 15.667c.178.422.08.91-.25 1.23L21.342 34.674a1.111 1.111 0 0 1-1.571 0l-7.778-7.777a1.111 1.111 0 1 1 1.571-1.572l6.992 6.993 16.993-16.993a1.112 1.112 0 0 1 1.82.342Z"
    />
    <path
      fill="#000"
      d="M38.312 14.99c-.29.008-.563.128-.764.335L20.555 32.318l-6.992-6.993a1.111 1.111 0 1 0-1.57 1.572l7.777 7.777a1.111 1.111 0 0 0 1.571 0L39.12 16.897a1.111 1.111 0 0 0-.807-1.908Z"
    />
  </svg>
)
export default Tick
