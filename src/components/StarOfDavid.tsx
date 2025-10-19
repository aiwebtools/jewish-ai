interface StarOfDavidProps {
  className?: string;
  animated?: boolean;
}

const StarOfDavid = ({ className = "", animated = false }: StarOfDavidProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${animated ? 'animate-glow-pulse' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow effect filters */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <animate attributeName="x1" values="0%;100%;0%" dur="8s" repeatCount="indefinite" />
          <animate attributeName="y1" values="0%;100%;0%" dur="8s" repeatCount="indefinite" />
          <stop offset="0%" stopColor="hsl(190, 100%, 50%)" stopOpacity="1">
            <animate attributeName="stop-color" 
              values="hsl(190, 100%, 50%); hsl(280, 80%, 60%); hsl(45, 100%, 50%); hsl(190, 100%, 50%)" 
              dur="6s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="hsl(280, 80%, 60%)" stopOpacity="1">
            <animate attributeName="stop-color" 
              values="hsl(280, 80%, 60%); hsl(45, 100%, 50%); hsl(190, 100%, 50%); hsl(280, 80%, 60%)" 
              dur="6s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="hsl(45, 100%, 50%)" stopOpacity="1">
            <animate attributeName="stop-color" 
              values="hsl(45, 100%, 50%); hsl(190, 100%, 50%); hsl(280, 80%, 60%); hsl(45, 100%, 50%)" 
              dur="6s" 
              repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      
      {/* Star of David - Two overlapping triangles */}
      {/* Upper triangle (pointing up) */}
      <polygon
        points="50,15 75,55 25,55"
        fill={animated ? "url(#starGradient)" : "currentColor"}
        stroke={animated ? "url(#starGradient)" : "currentColor"}
        strokeWidth="2"
        filter={animated ? "url(#glow)" : "none"}
      />
      
      {/* Lower triangle (pointing down) */}
      <polygon
        points="50,85 25,45 75,45"
        fill={animated ? "url(#starGradient)" : "currentColor"}
        stroke={animated ? "url(#starGradient)" : "currentColor"}
        strokeWidth="2"
        filter={animated ? "url(#glow)" : "none"}
      />
    </svg>
  );
};

export default StarOfDavid;
