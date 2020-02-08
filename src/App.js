import React from "react";
import "./styles.css";
import Container from "@material-ui/core/Container";
import SimpleSelect from "./Select_1";

export default function App() {
  return (
    <div className="App">
      <Container fixed className="Container_Main">
        <h1>Hello CodeSandbox</h1>
        <SimpleSelect />
        <h2>Start editing to see some magic happen!</h2>
      </Container>
    </div>
  );
}
