"use client";

import { useEffect, useState } from "react";

export default function SquigglyArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        right: "16px",
        zIndex: 9998,
        pointerEvents: "none",
        userSelect: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <svg
        width="60"
        height="100"
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* "try me" label */}
        <text
          x="50%"
          textAnchor="middle"
          y="12"
          fill="var(--primary)"
          fontSize="12"
          fontWeight="bold"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          try me
        </text>

        {/* Squiggly line going straight down */}
        <path
          d="M30 20 C22 28, 38 34, 30 42 C22 50, 38 56, 30 64 C22 72, 38 78, 30 84"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset="100"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="80;0;80"
            dur="2s"
            repeatCount="indefinite"
            calcMode="ease-in-out"
          />
        </path>
      </svg>
    </div>
  );
}
