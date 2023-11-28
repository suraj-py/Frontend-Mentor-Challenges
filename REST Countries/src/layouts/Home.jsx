import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import styled from 'styled-components'
import FilterRegion from '../components/FilterRegion';

const Main = styled.main`
  width: 100%;
  height: 100vh;
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



function Home() {
  let url = 'https://restcountries.com/v3.1/all?fields=name,region,population,capital'
  const fetchData = async () => {
    let response = await fetch(url)
    let data = await response.json();
    console.log(data)
  }
  fetchData()

  return (
    <div>
      <Navbar />
      <Main>
        <FindSection>
          <Searchbar />
          <FilterRegion />
        </FindSection>
      </Main>
    </div>
  )
}

export default Home