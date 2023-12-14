import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import styled from 'styled-components'
import FilterRegion from '../components/FilterRegion';
import CountryCard from '../components/CountryCard';
import { numberFormatter } from '../utilis/populationFormatter';
import { countries } from '../utilis/countryNames';

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 20px 100px;
  background-color: ${(props) => props.theme.background};
  transition: all 0.2s linear;

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
  color: ${(props) => props.theme.text};
  font-weight: 300;
  cursor: pointer;
  background-color: ${(props) => props.theme.element};
`

  
function Home() {

  const [countryData, setCountryData] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [searchRegion, setSearchRegion] = useState('')
  const [loadMore, setLoadMore] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital')
      let data = await response.json();
      setCountryData(data)
    }
    fetchData()
  }, [])

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
          label="Filter Regions"
          values={countries}
          onChange={(v) => setSearchRegion(v)}
        />
        </FindSection>
        <CountryCards>
          {
            filteredCountries.slice(0, loadMore).map(country => (
              <CountryCard
                key={country.flags.png}
                imgUrl={country.flags.png}
                name={country.name.common}
                population={numberFormatter(country.population)}
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