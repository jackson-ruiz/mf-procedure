import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const TextBox = (props) => {
  const { id, label, type, defaultValue, changeAction } = props;
  const [textValue, setTextValue] = useState(defaultValue);
  const handleChange = (event) => {
    event.preventDefault();
    const { target } = event;
    const { value } = target;
    setTextValue(value);
    changeAction(value);
  };
  return (
    <TextField
      id={id}
      label={label}
      value={textValue}
      onChange={handleChange}
      type={type}
      variant="outlined"
      size="small"
      className="my-1"
      fullWidth
    />
  );
};

TextBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  changeAction: PropTypes.func,
};

export default TextBox;
