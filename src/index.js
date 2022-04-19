import React from "react";
import ReactDOM from "react-dom";

const hozirgiVaqt = function () {
  let now = new Date();

  return now;
};
console.log(hozirgiVaqt().toLocaleTimeString());
const App = function () {
  return (
    <p>
      Hozirgi vaqt: {hozirgiVaqt().getHours()}:{hozirgiVaqt().getMinutes()},{" "}
      {hozirgiVaqt().getDate()}
      -aprel, {hozirgiVaqt().getFullYear()}
    </p>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
