import styled from "@emotion/styled";
import { Reorder } from "framer-motion";

export const LocationContainer = styled.div`
    display: grid;
    gap: 32px;
    place-items: center;
    grid-template-rows: 200px 50px 100px 50px 200px;
    position: relative;
    
    h4{
        display: grid;
        place-items: center;

        background: lightgreen;
        color: white;

        font-size: xx-large;
        padding: 32px;
        border-radius: 20px;
    }
    `

export const PointsContainer = styled.div`
    display: grid;
    place-items: center;
    background: lightcoral;
    color: white;
    font-size: xx-large;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`

export const CardsContainer = styled(Reorder.Group)`
    display: grid;
    grid-template-columns: auto auto;
    gap: 4px;
    background: lightgray;
    width: 100%;
    height: 100%;
`