import React from "react";

import styled from "styled-components";

const SelectView = ({ options, onChange }) => {
  return (
    <Select onChange={onChange}>
      {options.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-right: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    text-declaration: uppercase;
  }
`;

export default SelectView;
