import { useState } from "react";

export const Cats = () => {
  const [neutraliseOutput, setNeutraliseOutput] = useState("");

  function neutralise(s1: string, s2: string) {
    let output = "";
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) {
        output += s1[i];
      } else {
        output += "0";
      }
    }
    setNeutraliseOutput(output);
  }

  return (
    <div>
      <button
        onClick={() => neutralise("-++-", "-+-+")}
        className="m-3 rounded-lg bg-blue-500 p-3 text-white"
      >
        Run Function
      </button>
      <div>{neutraliseOutput}</div>
    </div>
  );
};
