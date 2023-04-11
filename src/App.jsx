import React from "react";
import { SelectCity, ForcastDates } from "./features";
import { InputLabel } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <InputLabel style={{ fontWeight: "bold", fontSize: 50 }}>
        Travel planner
      </InputLabel>
      <ForcastDates />
      <SelectCity />
    </div>
  );
}
