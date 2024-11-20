import React, { useState } from "react";

const Passinput = ({ onPasswordChange }) => {
  const [passwrd, setpass] = useState("Passw");
  console.log(passwrd);

  return (
    <div class="set-pass">
      <input
        type="password"
        placeholder="Enter Password..."
        value={passwrd}
        name="password"
        onChange={(parameter) => setpass(parameter.target.value)}
      />
    </div>
  );
};

export default Passinput;
