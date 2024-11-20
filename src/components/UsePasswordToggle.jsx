import React, { useState } from "react";
import { fontAwesomeIcon } from "@fortawesome/react-fontAwesomeIcon";
const UsePasswordToggle = () => {
  const [visible, visibility] = useState(false);
  const Icon = <fontAwesomeIcon icon={visible ? "eye-slash" : "eye"} />;

  return;
};

export default UsePasswordToggle;
