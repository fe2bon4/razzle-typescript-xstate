import React, { useState} from "react";
import logo from "./react.svg";
import "./Workbench.css";

import { PageHeader, Button } from "../../components/control";
import { Form } from "../../components/component";

const text_fields = [
  {
    id: "first_name",
    label: "First Name",
    type: "text",
  },
  {
    id: "last_name",
    label: "Last Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "date",
    label: "Date",
    type: "date",
  },
  {
    id: "time",
    label: "Time",
    type: "time",
  },
];


function Workbench() {
  const [showForm, setShowForm ] = useState<boolean>(false)

  return (
    <div className="Workbench">
      <PageHeader title={"Workbench"}>
        <img src={logo} className="header-logo" alt="logo" />
        <h2>Workbench</h2>
      </PageHeader>

      {/* <Buttons /> */}
      {showForm && (
        <Form
          title={"Sample Form"}
          fields={text_fields}
          onDiscard={() => {
            setShowForm(false);
          }}
          onSave={(data: any) => {
            console.log(data);
            setShowForm(false);
          }}
        />
      )}

      {!showForm && (
        <Button
          color={"primary"}
          debounce_ms={0}
          onClick={() => setShowForm(true)}
        >
          Show Form
        </Button>
      )}
    </div>
  );
}

export default Workbench;
