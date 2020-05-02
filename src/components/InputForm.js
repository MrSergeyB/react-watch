import React, {useState} from "react";
import "../components/watch.css";

const InputForm = ({handleSubmit}) => {
  const [city, setCity] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(city, timeZone);
    setCity("");
    setTimeZone("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="input-box">
          <label>Название</label>
          <input
            className="input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label>Временная зона</label>
          <input
            className="input"
            type="number"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          />
        </div>
        <button className="btn">Добавить</button>
      </form>
    </div>
  );
};

export default InputForm;
