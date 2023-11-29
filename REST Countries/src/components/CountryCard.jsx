import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Card = styled.article`
    width: 240px;
    height: 340px;
    border-radius: 5px;
    background-color: hsl(209, 23%, 22%);
`
const FlagImg = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 5px;
`
const CountryInfo = styled.div`
    color: white;
    padding: 10px 20px;
    
`
const Name = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 15px;
    font-weight: 800;
`

const InfoTitle = styled.p`
    font-size: 1rem;
    font-style: bold;
    margin-bottom: 5px;
    font-weight: 600;
`
const Info = styled.span`
    font-weight: 300;
`

function CountryCard({imgUrl, name, population, region, capital}) {
    return (
    <Link to={`/detail/${name}`}>
    <Card>
        <FlagImg src={imgUrl} />
        <CountryInfo>
              <Name>{ name }</Name>
            <InfoTitle>Population: <Info>{ population }</Info></InfoTitle>
            <InfoTitle>Region: <Info>{ region }</Info></InfoTitle>
            <InfoTitle>Capital: <Info>{ capital }</Info></InfoTitle>
        </CountryInfo>
    </Card>
    </Link>
  )
}

export default CountryCard