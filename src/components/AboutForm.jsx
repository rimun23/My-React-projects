import React, { useState } from "react";
function AboutForm() {
  let [age, upd_age] = useState("");
  let [name, upd_name] = useState("");
  const setName = (e) => {
    upd_name(e.target.value);
  };
  const setAge = (e) => {
    upd_age(e.target.value);
    if (age >= 122) {
      alert(
        "вам не может столько быть, ведь самому старому человеку за всю историю было 122 года"
      );
    }
  };
  return (
    <div className="main">
      <div className="style">
        <h1>Немного о вас:</h1>
        <hr />
        <div className="info">
          <div className="name">
            <h1>Ваше имя:</h1>
            <input type="text" onChange={setName} />
            <p>Моё имя: {name}</p>
          </div>
          <div className="age">
            <h1>Ваш возраст:</h1>
            <input type="number" onChange={setAge} max={122} />
            <p>Мне {age} лет</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutForm;
