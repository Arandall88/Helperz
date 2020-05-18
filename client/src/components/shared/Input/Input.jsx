import React from "react";
import PropTypes from "prop-types";

const Input = ({id, type, name, value, handleChange}) => {
  return (
    <div className="input-field col s6">
      <div>
        <input
          id={id}
          type={type}
          className="validate"
          name={name}
          value={value}
          onChange={handleChange}
        />
        <label htmlFor= "email">Email</label>
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
