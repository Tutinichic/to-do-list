import React from "react";
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";

const ButtonsSort = ({
  isListInView1,
  setIsListInView1,
  sortedBy,
  setSortedBy
}) => {
  return (
    React.createElement("div", { className: "flex children-styles" },
      React.createElement("button", { onClick: () => setIsListInView1(true) },
        React.createElement(IconView1, { className: isListInView1 ? "text-orange-500" : "" })
      ),
      React.createElement("button", { onClick: () => setIsListInView1(false) },
        React.createElement(IconView2, { className: !isListInView1 ? "text-orange-00" : "" })
      ),
      React.createElement("select", {
        className: "ml-auto inputStyles",
        value: sortedBy,
        onChange: ({ target }) => setSortedBy(target.value)
      },
        React.createElement("option", { value: "", disabled: true },
          "Sort by"
        ),
        React.createElement("option", { value: "min-date" }, "New"),
        React.createElement("option", { value: "max-date" }, "Last"),
        React.createElement("option", { value: "completed-first" }, "Completed first"),
        React.createElement("option", { value: "uncompleted-first" }, "Uncompleted first")
      )
    )
  );
};

export default ButtonsSort;