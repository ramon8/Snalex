import styled from "@emotion/styled";

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    place-items: center;
`
export const CardsContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    margin: 16px;
    gap: 16px;
    place-items: center;
`

export const ContainerButton = styled.div`
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    gap: 32px;
    margin: 16px;
    width: 100%;
`

export const Button = styled.button`
    font-size: 3rem;
    border: 0px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    color: white;
    cursor: pointer;
    background: #2d762d;
    transition: .08s;
    place-self: start center;
    &:hover { background: #245e24 }
    &:active{ background: #1e4e1e }
`
export const Counter = styled.div`
    font-size: 3rem;
`