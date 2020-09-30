import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../icons";

export const ArgumentCard = ({ arg: { id, title, content, list } }) => {
  let [open, setOpen] = useState("");
  const toggleMenu = (id) => {
    open === id ? setOpen((open = "")) : setOpen((open = id));
  };

  return (
    <div key={id} className="argument-card">
      <h3
        onClick={() => toggleMenu(id)}
        className={open === id ? "open" : undefined}
      >
        {title}
        <ChevronDownIcon className={open === id ? "hidden" : undefined} />
        <ChevronUpIcon className={open !== id ? "hidden" : undefined} />
      </h3>
      <div className={`arg-content ${open !== id ? "hidden" : undefined}`}>
        <div>{content}</div>
        <ul>
          {list.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
