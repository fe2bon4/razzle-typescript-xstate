import React from "react";
import PageHeader from "../../components/control/PageHeader";
import logo from "./react.svg";

import "./Workbench.css";

class Workbench extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Workbench">
        <PageHeader title={"Workbench"}>
          <img src={logo} className="header-logo" alt="logo" />
          <h2>Workbench</h2>
        </PageHeader>
        <ul className="Workbench-resources"></ul>
      </div>
    );
  }
}

export default Workbench;
