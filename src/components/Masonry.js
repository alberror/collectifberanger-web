import React from "react";

import { pictures } from "../tools/constants";

export const Masonry = () => (
  <div className="masonry">
    <img src="/logo-inv.png" className="logo-inv" alt="logo" />
    {pictures.map(({ className, name, src }, i) => (
      <div key={i} className={`people ${className}`}>
        <img src={src} alt={name} />
        <p>{name}</p>
      </div>
    ))}
  </div>
);
