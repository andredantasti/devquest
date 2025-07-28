import styled from "styled-components";

const MainContainer = styled.main`
  background-color: lightblue;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = ({children}) => {
  return <MainContainer>{children}</MainContainer>;
};

export { Main };
