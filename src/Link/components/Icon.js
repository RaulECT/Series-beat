const NetflixIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    viewBox="0 0 512 512"
  >
    <polygon points="304,0 304,256 208,0 112,0 112,512 208,512 208,256 304,512 400,512 400,0"/>
  </svg>
);

const PlayIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
    viewBox="0 0 512 512"
  >
    <path
      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
    />
  </svg>
);

const Icon = ({type}) => {
  if (type === 'netflix') return <NetflixIcon />
  if (type === 'other') return <PlayIcon />

  return <PlayIcon />
}

export default Icon;