import React, { useState } from "react";

const Tooltip = ({ txt, children, className }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    React.createElement("div", { className: `relative flex ${className}` },
      React.createElement("span", {
        className: "flex",
        onMouseEnter: () => setTooltipVisible(true),
        onMouseLeave: () => setTooltipVisible(false)
      },
        children
      ),
      React.createElement("div", {
        className: `absolute bg-slate-600 rounded-md w-max py-1 px-2 top-full text-slate-200 z-10 ${tooltipVisible ? "visible" : "invisible"}`
      },
        txt
      )
    )
  );
};

export default Tooltip;