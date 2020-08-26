import React from "react";
import PropTypes from "prop-types";

// I'm not using css files because they will not work when exported!
// Consider to use styled components for your project...
function ListItem(props) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid #bbb",
        backgroundColor: "#eee"
      }}
    >
      <span
        style={{
          fontSize: "1.2em",
          textDecoration: "none",
          color: "#333"
        }}
      >
        {props.text}
      </span>
    </div>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default ListItem;
