import React, { useState } from 'react'
import styled, {css} from 'styled-components'

const FilterDiv = styled.select`
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  font-weight: 300;
  color: white;
  border-radius: 5px;
  background-color: hsl(209, 23%, 22%);



`
const FilterOption = styled.option`
  background-color: hsl(209, 23%, 22%);
`

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`

const SelectLabelButton = styled.button`
  padding: 0.8rem 0.5rem;
  min-width: 10rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: hsl(209, 23%, 22%);
  border: none;
  border-radius: 5px;
  color: white;
  align-items: center;
  justify-content: space-between;
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
  background: hsl(209, 23%, 22%);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: white;
  border-radius: 0.3rem;
  cursor: pointer;
  ${(p) =>
    p.active &&
    css`
      color: #166edc;
      font-weight: 500;
    `}
  &:hover, :focus, :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;
function FilterRegion({ label, values, onChange}) {
  const [currentValue, setCurrentValue] = useState('')
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
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
