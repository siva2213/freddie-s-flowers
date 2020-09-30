import React from "react";

export default (props) => {
  if (Array.isArray(props.children)) {
    return (
      <div className="breadcrumb">
        {props.children[0]} &nbsp;/&nbsp; {props.children[1]}
        {props.children.map((child, i) => {
          return i === 0 || props.children.length - 1 === i ? (
            <p>{child}</p>
          ) : (
            <p>{child} &nbsp;/&nbsp;</p>
          );
        })}
      </div>
    );
  } else {
    return <div className="breadcrumb">{props.children}</div>;
  }
};
