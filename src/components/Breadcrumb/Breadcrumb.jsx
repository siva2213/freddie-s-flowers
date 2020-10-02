import React from "react";
import "./Breadcrumb.css";

export default (props) => {
  if (Array.isArray(props.children)) {
    return (
      <div className="breadcrumb">
        {props.children.map((child, i) => {
          return <p key={child}>{child}</p>;
        })}
      </div>
    );
  } else {
    return <div className="breadcrumb">{props.children}</div>;
  }
};
