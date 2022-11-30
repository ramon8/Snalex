import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Reorder } from "framer-motion";

/** Styled div */
export const BattleGroundContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 64px;
    margin: 32px;
    grid-template-rows: 
        1fr
        1fr;
`
/** Styled div */
export const ContainerWorlds = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-self: center center;
    border: 1px solid red;
    list-style-type: none;
`

/** Styled Reorder.Group */
export const World = styled.div`
    display: grid;
    grid-auto-flow: column;
    place-items: center;
`

export const HandContainer = styled.div`
    display: grid;
    gap: 32px;
    grid-auto-flow: column;
    width: fit-content;
    height: fit-content;
    background: lightgray;
    place-self: start center;
`

/** Styled div */
export const Hand = styled(Reorder.Group)`
    display: grid;
    grid-auto-flow: column;
    place-self: end center;
    list-style-type: none;
    gap: 16px;
    margin: 32px;
`

export const Mana = styled.div`
    background: darkblue;
    color: white;
    width: 50px;
    height: 50px;
    place-self: center;
    display: grid;
    place-items: center;
    border-radius: 50%;
    font-size: large;
`

export const NextButton = styled(Button)`
    width: fit-content;
    place-self: center;
`