import styled from "styled-components"
import { Moon } from "lucide-react";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 100px;
  background-color: ${(props) => props.theme.element};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 640px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const DarkModeButton = styled.button`
  all: unset;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
  }
`
function Navbar({onClick}) {
 
  return (
    <Wrapper>
        <Title>
            Where in the world?
        </Title>
        <DarkModeButton onClick={onClick}>
              <Moon fill="white" />
              Dark Mode
        </DarkModeButton>
    </Wrapper>
  )
}

export default Navbar