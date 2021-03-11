import React from "react";
import logo from "./react.svg";
import "./Workbench.css";

import { PageHeader } from "../../components/control";
import Buttons from "./sections/Buttons";
class Workbench extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Workbench">
        <PageHeader title={"Workbench"}>
          <img src={logo} className="header-logo" alt="logo" />
          <h2>Workbench</h2>
        </PageHeader>

        <Buttons />
      </div>
    );
  }
}

export default Workbench;
