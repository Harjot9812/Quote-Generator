import React from "react";
import { useState } from "react";

export default function Quote() {
  const [status, setstatus] = useState("Welcome");
  return (
    <>
      <div>{status}</div>
    </>
  );
}
