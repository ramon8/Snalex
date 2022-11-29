import styled from "@emotion/styled";

export const LocationContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-rows: 400px 50px 120px 50px 400px;
    
    h4{
        display: grid;
        place-items: center;

        background: lightgreen;
        color: white;

        font-size: xx-large;
        width: 200px;
        height: 200px;
        border-radius: 20px;
    }
`

export const PointsContainer = styled.div`
    display: grid;
    place-items: center;
    background: lightcoral;
    color: white;
    font-size: large;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    z-index: 1;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 4px;
    border: 1px solid red;
`