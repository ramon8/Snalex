import styled from "@emotion/styled";

export const LocationContainer = styled.div`
    display: grid;
    place-items: center;
    border: 1px solid red;
`

export const ContainerCards = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid green;
    gap: 16px;
    width: 450px;
    height: 182px;
`

export const PlayerCards = styled(ContainerCards)`

`

export const OponentCards = styled(ContainerCards)`

`

export const Points = styled.div`
    display: grid;
    place-items: center;
    gap: 8px;
    &>div{
        display: grid;
        place-items: center;
        background: #df2929;
        width: 1.5rem;
        height: 1.5rem;
        padding: .4rem;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: bolder;
        color: white;
    }
`