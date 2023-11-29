import { ArrowLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px 100px;
  background-color: hsl(207, 26%, 17%);

  @media screen and (max-width: 620px) {
    overflow-x: hidden;
    padding-left: 10px;
  }
`
const BackButton = styled.button`
  all: unset;
  width: 80px;
  height: 20px;
  padding: 5px;
  color: white;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: hsl(209, 23%, 22%);
`
const DetailSection = styled.div`
  display: flex;
  justify-content: space-between;
`
const FlagImage = styled.img`
  width: 200px;
  height: 150px;
`
const CountryInfo = styled.div`
  
`
const CountryName = styled.h1`
  
`

const InfoSection = styled.div`
  
`
const InfoTitle = styled.p`

`

const Info = styled.span`

`



function CountryDetailPage() {
  const [countryInfo, setCountryInfo] = useState([])
  const { name } = useParams()
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`

  const fetchCountryDatabyName = async ()=> {
    let response = await fetch(url)
    let data = await response.json()
    setCountryInfo(data)
  }

  useEffect(() => {
    fetchCountryDatabyName()
  }, [])


  return (
    <Wrapper>
      <Link to='/'>
        <BackButton>
          <ArrowLeft color='white' />  
          Back
        </BackButton>
      </Link>
      {
        countryInfo.map(country => (
          <DetailSection key={country.name.common}>
            <FlagImage src={country.flags.png} />
            <CountryInfo>
              <CountryName>{country.name.common}</CountryName>
              <InfoSection>
                <div>
                  <InfoTitle>Population: <Info>{ country.population}</Info></InfoTitle>
                </div>
                <div>
                  <InfoTitle>Population: <Info>{ country.languages.en}</Info></InfoTitle>
                </div>
              </InfoSection>
            </CountryInfo>
        </DetailSection>
        ))
      }
    </Wrapper>
  )
}

export default CountryDetailPage