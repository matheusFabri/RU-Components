import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = (nextIndex) => {
      if (nextIndex === expandedIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(nextIndex);
      }
    };

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded"> {renderedItems} </div>;
}

export default Accordion;
