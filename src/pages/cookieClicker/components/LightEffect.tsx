import React from "react";

interface LightEffectProps {
  spinDirection: "clockwise" | "counterclockwise";
  size: string;
  blur: string;
  slices: number;
}

export const LightEffect: React.FC<LightEffectProps> = ({
  spinDirection,
  size,
  blur,
  slices,
}) => {
  const spinClass =
    spinDirection === "clockwise"
      ? "animate-spin-slow"
      : "animate-spin-slow-reverse";

  return (
    <div
      className={`${spinClass} absolute -z-10 ${size} overflow-hidden rounded-full ${blur}`}
    >
      {Array.from({ length: slices }).map((_, index) => (
        <div
          key={index}
          className="absolute h-full w-full"
          style={{
            background:
              index % 2 === 0
                ? "radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 100%)"
                : "radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 100%)",
            clipPath: `polygon(
              50% 50%, 
              ${50 + 50 * Math.cos((2 * Math.PI * index) / slices)}% ${
                50 + 50 * Math.sin((2 * Math.PI * index) / slices)
              }%, 
              ${50 + 50 * Math.cos((2 * Math.PI * (index + 1)) / slices)}% ${
                50 + 50 * Math.sin((2 * Math.PI * (index + 1)) / slices)
              }%
            )`,
            filter: "blur(30px)",
          }}
        ></div>
      ))}
    </div>
  );
};
