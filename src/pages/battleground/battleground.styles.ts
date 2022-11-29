import styled from "@emotion/styled";
import { motion, Reorder } from "framer-motion";

/** Styled div */
export const BattleGroundContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
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
export const World = styled(Reorder.Group)`
    display: grid;
    grid-auto-flow: column;
    place-items: center;
`

/** Styled div */
export const Hand = styled.div`
    display: grid;
    grid-auto-flow: column;
    place-self: end center;
    list-style-type: none;
    `

/** Styled Reorder.Item */
export const Card = styled(Reorder.Item)`
    width: 160px;
    height: 320px;
    background: lightblue;
    margin: 8px;
    box-shadow: 2px 2px 10px gray;
    padding: 16px;
`