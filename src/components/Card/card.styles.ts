import styled from "@emotion/styled";
import { Reorder } from "framer-motion";

export const CardContainer = styled(Reorder.Item)`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
    gap: 16px 8px;
    place-items:center;

    box-shadow: 2px 2px 3px 1px black;
    background-color: white;
    
    width: 100px;
    height: 160px;
    padding: 8px;
    border-radius: 8px;
    text-align: center;

    cursor: pointer;
`
export const Circle = styled.div`
    display: grid;
    place-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
`

export const Mana = styled(Circle)`
        background: lightblue;
        grid-column-start: 1;
        grid-column-end: 2;
`

export const Name = styled.div`
    place-self: start center;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
`

export const Power = styled(Circle)`
    background: orangered;
    grid-column-start: 3;
    grid-column-end: -1;
`
