type SnapchatIconProps = {
  size?: number;
  className?: string;
};

/** شعار Snapchat: خلفية صفراء + شبح أبيض (مبسّط وواضح على الأحجام الصغيرة) */
const SnapchatIcon = ({ size = 24, className }: SnapchatIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="7" fill="#FFFC00" />
      <path
        fill="#FFFFFF"
        stroke="#1F2937"
        strokeWidth="0.6"
        strokeLinejoin="round"
        d="M16 7.5c-3.6 0-6.5 2.8-6.5 6.3 0 1.8.6 3.4 1.5 4.6-.08.75-.22 1.45-.55 2.05-.75.95-2.15 1.25-3.45 1.5-.38.08-.78.22-.92.5-.16.34.1.72.48.82 1.55.5 3.2.55 5.05.55h.18c1.85 0 3.5-.05 5.05-.55.38-.1.64-.48.48-.82-.14-.28-.54-.42-.92-.5-1.3-.25-2.7-.55-3.45-1.5-.33-.6-.47-1.3-.55-2.05.9-1.2 1.5-2.8 1.5-4.6 0-3.5-2.9-6.3-6.5-6.3z"
      />
      <circle cx="13.2" cy="13.8" r="1.1" fill="#1F2937" />
      <circle cx="18.8" cy="13.8" r="1.1" fill="#1F2937" />
    </svg>
  );
};

export default SnapchatIcon;
