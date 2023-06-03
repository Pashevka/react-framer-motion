const QIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width ? props?.width : 156}
    height={props?.height ? props?.height : 156}
    viewBox="0 0 156 156"
    fill="none"
    {...props}
  >
    <path
      fill="#6DBACC"
      d="M78 0a78 78 0 1 0 0 156h78V78A78.009 78.009 0 0 0 78 0Zm39 117H78a38.995 38.995 0 0 1-36.031-24.075A39 39 0 1 1 117 78v39Z"
    />
  </svg>
)

export default QIcon
