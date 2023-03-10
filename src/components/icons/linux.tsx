export const Linux = (props: {
  size: number;
  color: string;
  filled: boolean;
}) =>
  //if filled is true, then use the filled arrow, else use the outline arrow
  props.filled ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
      width={props.size}
      height={props.size}
      fill={props.color}
    >
      <title>Terminal</title>
      <path d="M432 32H80a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h352a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64zM96 256a16 16 0 01-10-28.49L150.39 176 86 124.49a16 16 0 1120-25l80 64a16 16 0 010 25l-80 64A16 16 0 0196 256zm160 0h-64a16 16 0 010-32h64a16 16 0 010 32z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
      width={props.size}
      height={props.size}
      fill={props.color}
    >
      <title>Terminal</title>
      <rect
        x="32"
        y="48"
        width="448"
        height="416"
        rx="48"
        ry="48"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M96 112l80 64-80 64M192 240h64"
      />
    </svg>
  );
