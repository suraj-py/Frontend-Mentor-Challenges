import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import styled, {css} from 'styled-components'


const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`

const SelectLabelButton = styled.button`
  padding: 0.8rem 0.5rem;
  min-width: 10rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.element};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s ease;
`

const DropdownStyle = styled.div`
  position: absolute;
  top: 10;
  left: 0;
  max-height: 40vmax;
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: ${(props) => props.theme.element};
  transition: max-height 0.2s ease;
  overflow: hidden;
  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;


const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) => props.theme.text};
  border-radius: 0.3rem;
  cursor: pointer;
  ${(p) =>
    p.active &&
    css`
      color: #8947e6;
      font-weight: 500;
    `}
  &:hover, :focus, :focus:hover {
    background-color: #c38adf;
    color: #fafafa;
    outline: none;
  }
`;
function FilterRegion({ label, values, onChange}) {
  const [currentValue, setCurrentValue] = useState('')
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value) => {
    setCurrentValue(value);
  };
  const handleChange = (value) => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {currentValue !== "" ? currentValue : label}
        <ChevronDown />
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            active={value === currentValue}
            key={index}
          >
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
  </SelectContainer>
  )
}

export default FilterRegion
