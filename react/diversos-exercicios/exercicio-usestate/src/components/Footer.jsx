import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: lightpink;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    gap: 1rem;
    font-size: 1.5rem;
`;

const Footer = ({children}) => {
    return (
    <FooterContainer>
        {children}
    </FooterContainer>
    )
}

export { Footer }