import React from "react";

const RadialGradientBackground = ({ variant = "hero", gradient = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-1 left-1 -translate-x-1/2 -translate-y-1/12",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(75,0,130,0.2)", stop: "0%" }, // dark purple
          { color: "rgba(128,0,128,0.3)", stop: "20%" }, // purple
          { color: "rgba(75,0,130,0.4)", stop: "40%" },
          { color: "rgba(0,0,0,0.4)", stop: "60%" }, // black shadow
          { color: "rgba(128,0,128,0.25)", stop: "80%" },
          { color: "rgba(75,0,130,0.2)", stop: "100%" },
        ],
        blur: "200px",
        opacity: 0.6,
      },
      {
        position: "bottom-1 right-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(0,0,0,0.2)", stop: "0%" }, // black shadow
          { color: "rgba(128,0,128,0.25)", stop: "20%" },
          { color: "rgba(75,0,130,0.3)", stop: "40%" },
          { color: "rgba(0,0,0,0.35)", stop: "60%" },
          { color: "rgba(128,0,128,0.2)", stop: "80%" },
          { color: "rgba(75,0,130,0.1)", stop: "100%" },
        ],
        blur: "250px",
        opacity: 0.5,
      },
      {
        position: "top-1 right-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(75,0,130,0.1)", stop: "0%" },
          { color: "rgba(128,0,128,0.2)", stop: "20%" },
          { color: "rgba(0,0,0,0.3)", stop: "40%" },
          { color: "rgba(75,0,130,0.35)", stop: "60%" },
          { color: "rgba(128,0,128,0.25)", stop: "80%" },
          { color: "rgba(0,0,0,0.2)", stop: "100%" },
        ],
        blur: "180px",
        opacity: 0.55,
      },
    ],
    about: [
      {
        position: "center",
        size: "w-[1200px] h-[1200px]",
        colors: [
          { color: "rgba(128,0,128,0.2)", stop: "0%" },
          { color: "rgba(75,0,130,0.25)", stop: "20%" },
          { color: "rgba(0,0,0,0.3)", stop: "40%" },
          { color: "rgba(128,0,128,0.35)", stop: "60%" },
          { color: "rgba(75,0,130,0.25)", stop: "80%" },
          { color: "rgba(0,0,0,0.2)", stop: "100%" },
        ],
        blur: "220px",
        opacity: 0.6,
      },
    ],
  };

  const activeGradients =
    variant === "custom " ? gradient : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");
    return `radial-gradient(circle, ${colorStops})`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RadialGradientBackground;
