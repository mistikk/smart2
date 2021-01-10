import React, { useState } from "react";
import styled from "styled-components";

import ChevronDownIcon from "../../assets/icon/chevron-down-solid.svg";

const SelectView = ({ defaultOption, label, items, onChange }) => {
  const [extended, setExtended] = useState(false);
  const [title, setTitle] = useState(defaultOption || "...");

  const _handleSelectClick = () => {
    setExtended(!extended);
  };

  const _handleOptionClick = (item) => {
    setExtended(false);
    setTitle(item);
    onChange(item);
  };

  return (
    <Dropdown onClick={_handleSelectClick}>
      <DropdownTitle>{label}</DropdownTitle>
      <DropdownValue>{title}</DropdownValue>
      <Icon src={ChevronDownIcon}></Icon>
      <DropdownMenu>
        {items &&
          items.map((item) => (
            <DropdownMenuItem
              key={item}
              className="select-box-option"
              onClick={() => _handleOptionClick(item)}
            >
              {item}
            </DropdownMenuItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 8px;
  width: 100%;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid;
  text-align: left;
  padding: 7px 0px;
  cursor: pointer;
  width: 25vw;
  margin-top: 30px;
  &:hover ${DropdownMenu} {
    display: block;
  }
`;

const DropdownTitle = styled.span`
  font-size: 13px;
  color: #616a6b;
  padding: 0px 20px;
  font-size: ${({ theme }) => theme.small};
`;

const DropdownValue = styled.div`
  padding-top: 3px;
  font-size: ${({ theme }) => theme.selectTitle};
  font-weight: 700;
  padding: 0px 20px;
`;

const DropdownMenuItem = styled.li`
  color: black;
  padding: 12px 1vw;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  margin: auto;
  width: 15px;
  height: 15px;
`;

export default SelectView;
