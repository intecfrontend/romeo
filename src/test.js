import React from "react";

function Test() {
  var r = document.querySelector(":root");
  const test = deg => {
    r.style.setProperty("--degraden", deg);
  };
  var today = new Date().getHours();
  const testplaats = document.querySelectorAll(".test");
  console.log("today" + today);

  if (today == 7) {
    test("-90deg");
  } else if (today == 8) {
    test("-75deg");
  } else if (today == 9) {
    test("-50deg");
  } else if (today == 10) {
    test("35deg");
  } else {
    test("-180deg");
  }

  return (
    <div className="containertest">
      <div className="test">test</div>
    </div>
  );
}

export default Test;
