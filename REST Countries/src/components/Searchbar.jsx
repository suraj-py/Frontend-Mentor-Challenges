import React from 'react'

function Searchbar({name}) {
  return (
    <form>
          <input
              value={name}
              type='text'
              placeholder='Search for a country...'
          />
    </form>
  )
}

export default Searchbar