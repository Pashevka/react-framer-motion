const Arch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width ? props?.width : 138}
    height={props?.height ? props?.height : 138}
    viewBox="0 0 138 138"
    fill="none"
    {...props}
  >
    <path
      fill="#9BC385"
      d="M138 138H69A69.006 69.006 0 0 0 0 69V0a138 138 0 0 1 138 138Z"
    />
  </svg>
)

export default Arch
