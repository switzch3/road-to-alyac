export default function SVGCurrentSpot() {
  return (
    <svg
      width="52"
      height="51"
      viewBox="0 0 52 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_9)">
        <ellipse cx="26" cy="21.5" rx="22" ry="21.5" fill="white" />
      </g>
      <circle cx="26" cy="21" r="11.5" stroke="black" />
      <circle cx="26" cy="21" r="2" fill="black" />
      <rect x="25" y="10" width="2" height="3" fill="black" />
      <rect x="25" y="29" width="2" height="3" fill="black" />
      <rect
        x="37"
        y="20"
        width="2"
        height="3"
        transform="rotate(90 37 20)"
        fill="black"
      />
      <rect
        x="18"
        y="20"
        width="2"
        height="3"
        transform="rotate(90 18 20)"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_1_9"
          x="0"
          y="0"
          width="52"
          height="51"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_9"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_9"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
