const AnimatedWifiIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Dot */}
      <circle cx="12" cy="19" r="1" fill="currentColor" className="animate-wifi-dot" />
      {/* Small arc */}
      <path d="M8.5 16.429a5 5 0 0 1 7 0" className="animate-wifi-bar1" />
      {/* Medium arc */}
      <path d="M5 12.859a10 10 0 0 1 14 0" className="animate-wifi-bar2" />
      {/* Large arc */}
      <path d="M1.5 9.29a15 15 0 0 1 21 0" className="animate-wifi-bar3" />
    </svg>
  );
};

export default AnimatedWifiIcon;
