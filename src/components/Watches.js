import React from "react";
import Watch from "./Watch";
import "../components/watch.css";

const Watches = ({inputsData, removeClock}) => {
  return (
    <div className="watch-container">
      {inputsData.map((input, id) => {
        return (
          <Watch
            key={id}
            city={input.city}
            timeZone={input.timeZone}
            removeClock={removeClock}
          />
        );
      })}
    </div>
  );
};

export default Watches;
