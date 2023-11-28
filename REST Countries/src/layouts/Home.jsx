import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import styled from 'styled-components'
import FilterRegion from '../components/FilterRegion';
import CountryCard from '../components/CountryCard';

const Main = styled.main`
  width: 100%;
  height: auto;
  padding: 20px 100px;
  background-color: hsl(207, 26%, 17%);

  @media screen and (max-width: 620px) {
    overflow-x: hidden;
    padding-left: 10px;
  }
`;

const FindSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
  }
`;

const CountryCards = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
`


function Home() {

  const [countryData, setCountryData] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  let url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital'
  const fetchData = async () => {
    let response = await fetch(url)
    let data = await response.json();
    setCountryData(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const filteredCountries = countryData.filter(country => {
    return country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  })
  


  return (
    <div>
      <Navbar />
      <Main>
        <FindSection>
          <Searchbar
            value={searchCountry}
            handlerFunction={(e) => setSearchCountry(e.target.value)}
          />
          <FilterRegion />
        </FindSection>
        <CountryCards>
          {
            filteredCountries.map(country => (
              <CountryCard
                key={country.capital}
                imgUrl={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))
          }
        </CountryCards>
      </Main>
    </div>
  )
}

export default Home