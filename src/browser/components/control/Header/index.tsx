import React from "react";
import "./index.css";

function PageHeader(props: any) {
  const { className = "header", style, itemClassName, children = {} } = props;

  const applyHeaderStyles = (child: React.ReactElement) => {
    const props = {
      ...child.props,
    };

    return (
      <div className={`header-item ${itemClassName}`}>
        {React.cloneElement(child, props)}
      </div>
    );
  };

  return (
    <div className={`header ${className}`} style={style}>
      {React.Children.map(children, applyHeaderStyles)}
    </div>
  );
}

export default PageHeader;
