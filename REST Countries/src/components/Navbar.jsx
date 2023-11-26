import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 100px;
  background-color: hsl(209, 23%, 22%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
`

const DarkModeButton = styled.button`
  all: unset;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`
function Navbar() {
  return (
    <Wrapper>
        <Title>
            Where in the world?
        </Title>
        <DarkModeButton>
              Dark Mode
        </DarkModeButton>
    </Wrapper>
  )
}

export default Navbar