import { ArrowLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from '../data/countryNames'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 100px;
  background-color: hsl(207, 26%, 17%);

  @media screen and (max-width: 620px) {
    overflow-x: hidden;
    padding-left: 10px;
  }
`
const Button = styled.button`
  all: unset;
  width: 80px;
  height: 20px;
  padding: 10px;
  color: white;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: hsl(209, 23%, 22%);
`
const DetailSection = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FlagImage = styled.img`
  width: 400px;
  height: 260px;
`
const CountryInfo = styled.div`
  color: white;
  margin-right: 150px;

`
const CountryName = styled.h1`
  text-align: left;
  font-weight: 800;
  margin-bottom: 1rem;
`

const InfoSection = styled.div`
  display: flex;
  gap: 4rem;
  line-height: 1.8;
  margin-bottom: 1.3rem;
`
const InfoTitle = styled.p`
  font-weight: 600;
`

const Info = styled.span`
  font-weight: 300;
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
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`


  const fetchCountryDatabyName = async ()=> {
    let response = await fetch(url)
    let data = await response.json()
    setCountryInfo(data)
  }

  useEffect(() => {
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
      <Link to='/'>
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
                  <InfoTitle>Population: <Info>{country.population}</Info></InfoTitle>
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
              
              <InfoTitle>
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
              </InfoTitle>
            </CountryInfo>
        </DetailSection>
        ))
      }
    </Wrapper>
  )
}

export default CountryDetailPage