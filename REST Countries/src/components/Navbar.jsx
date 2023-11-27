import styled from "styled-components"
import { Moon } from "lucide-react";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 100px;
  background-color: hsl(209, 23%, 22%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 640px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;

  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const DarkModeButton = styled.button`
  all: unset;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
  }
`
function Navbar() {
  return (
    <Wrapper>
        <Title>
            Where in the world?
        </Title>
        <DarkModeButton>
              <Moon fill="white" />
              Dark Mode
        </DarkModeButton>
    </Wrapper>
  )
}

export default Navbar