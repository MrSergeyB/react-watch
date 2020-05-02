import React, {useState} from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Watches from "./components/Watches";

function App() {
  const [inputsData, setInputsData] = useState([
    {
      city: "Tokyo",
      timeZone: 0,
    },
    {
      city: "London",
      timeZone: 7,
    },
  ]);

  const handleSubmit = (city, timeZone) => {
    const stringToNumber = parseInt(timeZone);
    setInputsData([
      ...inputsData,
      {
        city,
        timeZone: stringToNumber,
      },
    ]);
    console.log(inputsData);
  };

  const removeClock = (city) => {
    const filteredClocks = inputsData.filter((input) => {
      return input.city !== city;
    });
    setInputsData([...filteredClocks]);
  };
  return (
    <div className="container">
      <InputForm handleSubmit={handleSubmit} />
      <Watches inputsData={inputsData} removeClock={removeClock} />
    </div>
  );
}

export default App;
