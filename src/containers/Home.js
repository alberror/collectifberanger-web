import React from "react";

import { ArgumentCard, MainText } from "../components";
import { listPoints } from "../tools/constants";

export const Home = () => (
  <div className="home-page">
    <MainText />
    <div className="arguments-line">
      {listPoints.map((arg, i) => (
        <ArgumentCard key={i} arg={arg} />
      ))}
    </div>
  </div>
);
