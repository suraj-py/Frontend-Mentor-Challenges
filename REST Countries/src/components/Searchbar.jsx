import { Search } from 'lucide-react'
import React from 'react'
import styled from 'styled-components'


const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
  background-color: hsl(209, 23%, 22%);
`;

const SearchInput = styled.input`
  width: 350px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  padding-left: 10px;
  font-size: 1rem; 
  background-color: hsl(209, 23%, 22%);

  @media screen and (max-width: 620px) {
    width: 300px;
    justify-self: center;
  }

`;

function Searchbar({handlerFunction}) {
  return (
    <Form>
          <Search size={16} color='white' />
          <SearchInput
              onChange={handlerFunction}
              type='text'
              placeholder='Search for a country...'
          />
    </Form>
  )
}

export default Searchbar