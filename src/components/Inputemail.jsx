import React, { useState } from "react";

const Inputemail = () => {
  const [pass, setpass] = useState("Emailll..");
  console.log(pass);

  return (
    <div className="inputset">
      <input
        class="border"
        type="text"
        placeholder="Enter Email or P.N.."
        value={pass}
        name="password"
        onChange={(parameter) => setpass(parameter.target.value)}
      />
    </div>
  );
};

export default Inputemail;
