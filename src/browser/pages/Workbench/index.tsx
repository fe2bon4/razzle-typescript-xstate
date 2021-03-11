import React from "react";
import logo from "./react.svg";
import "./Workbench.css";

import PageHeader from "../../components/control/PageHeader";
import Button from "../../components/control/Button";


class Workbench extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Workbench">
        <PageHeader title={"Workbench"}>
          <img src={logo} className="header-logo" alt="logo" />
          <h2>Workbench</h2>
        </PageHeader>
        <ul className="Workbench-resources">
          <li>
            <Button
              debounce_ms={0}
              onClick={() => {}}
              variant={"contained"}
              color={"default"}
            >
              Test 2
            </Button>
          </li>
          <li>
            <Button debounce_ms={0} onClick={() => {}} variant={"contained"}>
              Test 2
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Workbench;
