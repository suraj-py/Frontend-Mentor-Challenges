import React from 'react'
import styled from 'styled-components'

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
function FilterRegion({handlerFunction}) {
  return (
    <div>
       <FilterDiv onChange={handlerFunction}>
          <FilterOption value="">All Region</FilterOption>
          <FilterOption value="Africa">Africa</FilterOption>
          <FilterOption value="Americas">Americas</FilterOption>
          <FilterOption value="Asia">Asia</FilterOption>
          <FilterOption value="Europe">Europe</FilterOption>
          <FilterOption value="Oceania">Oceania</FilterOption>
        </FilterDiv>
    </div>
  )
}

export default FilterRegion