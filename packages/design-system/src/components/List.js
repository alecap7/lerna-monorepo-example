import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

function List(props) {
  return (
    <div>
      {props.items.map((content, index) => (
        <ListItem key={index} text={content || ""} />
      ))}
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;
