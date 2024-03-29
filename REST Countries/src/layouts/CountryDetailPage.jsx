import { ArrowLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../utilis/countryNames'
import { numberFormatter } from '../utilis/populationFormatter'
import styled from 'styled-components'
import { linkStyle } from '../components/CountryCard'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 100px;
  background-color: ${(props) => props.theme.background};

  @media screen and (max-width: 720px) {
    overflow-x: hidden;
    padding-left: 20px;
  }
`
const Button = styled.button`
  all: unset;
  width: 80px;
  min-height: 20px;
  padding: 10px;
  color: ${(props) => props.theme.text};
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: ${(props) => props.theme.element};
`
const DetailSection = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const FlagImage = styled.img`
  width: 400px;
  height: 260px;

  @media screen and (max-width: 720px) {
    width: 300px;
    height: 180px;
  }

`
const CountryInfo = styled.div`
  color: ${(props) => props.theme.text};

`
const CountryName = styled.h1`
  text-align: left;
  font-weight: 800;
  margin-bottom: 1rem;

  @media screen and (max-width: 720px) {
    margin-top: 1rem;
  }
`

const InfoSection = styled.div`
  display: flex;
  gap: 4rem;
  line-height: 1.8;
  margin-bottom: 1.3rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 0.8rem;
  }
`
const InfoTitle = styled.p`
  font-weight: 600;
`

const Info = styled.span`
  font-weight: 300;
`

const BorderTitle = styled(InfoTitle)`
   @media screen and (max-width: 720px) {
    margin-top: 2rem;
  }
`
const BorderSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
`

function CountryDetailPage() {
  const [countryInfo, setCountryInfo] = useState([])
  const border = []

  const { name } = useParams()

  useEffect(() => {
    const fetchCountryDatabyName = async ()=> {
      let response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      let data = await response.json()
      setCountryInfo(data)
    }
    fetchCountryDatabyName()
  }, [])


  function Borders() {
    countryInfo.map(i => {
      if (i.borders === undefined) {
        return border
      }
      else {
        i.borders.map(j => {
          data.map(k => {
            if (k.cca3 === j) {
              border.push(k.name.common)
            }
          })
        })
      }
      
   })
  }
  Borders()

  return (
    <Wrapper>
      <Link to='/' style={linkStyle}>
        <Button>
          <ArrowLeft color='white' />  
          Back
        </Button>
      </Link>
      {
        countryInfo.map(country => (
          <DetailSection key={country.name.common}>
            <FlagImage src={country.flags.png} />
            <CountryInfo>
              <CountryName>{country.name.common}</CountryName>
              <InfoSection>
                <div>
                  <InfoTitle>Native Name: <Info>{(Object.values(country.name.nativeName)[0]).official}</Info></InfoTitle>
                  <InfoTitle>Population: <Info>{numberFormatter(country.population)}</Info></InfoTitle>
                  <InfoTitle>Region: <Info>{country.region}</Info></InfoTitle>
                  <InfoTitle>Sub Region: <Info>{country.subregion}</Info></InfoTitle>
                  <InfoTitle>Capital: <Info>{ country.capital}</Info></InfoTitle>
                </div>
                <div>
                  <InfoTitle>Top Level Domain: <Info>{country.tld}</Info></InfoTitle>
                  <InfoTitle>Currencies: <Info>{Object.keys(country.currencies)}</Info></InfoTitle>
                  <InfoTitle>Languages: <Info>{ Object.values(country.languages).join(', ')}</Info></InfoTitle>
                </div>
              </InfoSection>
              
              <BorderTitle>
                Border Countries:
                {border.length === 0 ? (
                  <Info> No border countries</Info>
                ):(
                  <BorderSection>
                    {
                      border.map(i => (
                          <Button>{ i }</Button>
                      ))
                    }
                  </BorderSection>
                )
                }
              </BorderTitle>
            </CountryInfo>
        </DetailSection>
        ))
      }
    </Wrapper>
  )
}

export default CountryDetailPage