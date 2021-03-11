import React from "react";
import "./index.css";

function PageHeader(props: any) {
  const { className = "header", children = {} } = props;

  const applyHeaderStyles = (child: React.ReactElement) => {
    const props = {
      ...child.props,
    };

    return (
      <div className={"header-item"}>{React.cloneElement(child, props)}</div>
    );
  };

  return (
    <div className={className}>
      {React.Children.map(children, applyHeaderStyles)}
    </div>
  );
}

export default PageHeader;
