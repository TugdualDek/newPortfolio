export const School = (props: {
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
      <title>School</title>
      <path d="M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z" />
      <path d="M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z" />
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
      <title>School</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M32 192L256 64l224 128-224 128L32 192z"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128"
      />
    </svg>
  );
