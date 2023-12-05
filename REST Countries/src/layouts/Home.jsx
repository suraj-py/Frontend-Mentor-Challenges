import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import styled from 'styled-components'
import FilterRegion from '../components/FilterRegion';
import CountryCard from '../components/CountryCard';

const Main = styled.main`
  width: 100%;
  /* height: auto; */
  padding: 20px 100px;
  background-color: hsl(207, 26%, 17%);

  @media screen and (max-width: 620px) {
    overflow-x: hidden;
  }
`;

const FindSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
    padding-left: 10px;
  }
`;

const CountryCards = styled.div`
  height: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  justify-content: center;
  gap: 2.5rem;
`

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`
const Button = styled.button`
  all: unset;
  width: 80px;
  height: 20px;
  padding: 10px;
  color: white;
  font-weight: 300;
  cursor: pointer;
  background-color: hsl(209, 23%, 22%);
`


function Home() {

  const [countryData, setCountryData] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [searchRegion, setSearchRegion] = useState('')
  const [loadMore, setLoadMore] = useState(10)

  let url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital'
  const fetchData = async () => {
    let response = await fetch(url)
    let data = await response.json();
    setCountryData(data)
  }
  useEffect(() => {
    fetchData()
  }, [countryData])

  const filteredCountries = countryData.filter(country => {
    return (
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase()) && 
      country.region.toLowerCase().includes(searchRegion.toLowerCase())
    )
  })
  


  return (
      <Main>
        <FindSection>
          <Searchbar
            value={searchCountry}
            handlerFunction={(e) => setSearchCountry(e.target.value)}
          />
          <FilterRegion
            value={searchRegion}
            handlerFunction={(e) => setSearchRegion(e.target.value)}
          />
        </FindSection>
        <CountryCards>
          {
            filteredCountries.slice(0, loadMore).map(country => (
              <CountryCard
                key={country.flags.png}
                imgUrl={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))
          }
      </CountryCards>
      <BottomSection>
      {filteredCountries.length > 9 ?
        (
          <Button onClick={() => setLoadMore(prev => prev + 10)}> Load More </Button>
        ) :
        (<></>)
      }
      </BottomSection>
      </Main>
  )
}

export default Home