import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { CardProps, CardSize } from "./card.props";


export const Circle = styled.div`
    display: grid;
    place-items: center;
    place-self: center;

    padding: 4px;
    margin: 4px;
    border-radius: 2px 8px;
    width: 1rem;
    height: 1rem;

    font-size: 1rem;
    color: white;
`

/** */
export const CardContainer = styled(motion.div)`
    position: relative;
    user-select: none;
    cursor: pointer;
    scale: 1;

    font-family: Andale Mono, monospace;
    font-size: medium;
    width: 100px;
    height: 180px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    /* transform-origin: 10% 60%; */
    /* transform: translate(-50%, -50%); */
    /* gap: 16px 0px; */

    background: white;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
        0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
        0 0 16px hsl(0deg 0% 0% / 0.075);

    display: grid;
    place-items: center;
    grid-template: 
        " name name power " 1fr
        " icon icon icon  " 3fr
        " desc desc desc  " auto
        " cost .    .  " 1fr / 1fr 1fr 1fr;
`;

export const Name = styled.div`
    grid-area: name;
    font-size: 1rem;
`;

export const Power = styled(Circle)`
    grid-area: power;
    background: orange;
`;

export const Cost = styled(Circle)`
    grid-area: cost;
    background: lightblue;
`;

export const Description = styled(motion.div)`
    grid-area: desc;
    background-color: rgba(255,100,0,.75);
    margin: 4px;
    border-radius: 8px;
    padding: 8px;
    color: white;
    font-size: .7rem;
    text-align: center;
`;

export const Icon = styled(motion.div)`
    grid-area: icon;
    font-size: 50px;
`;


export const CardDetailContainer = styled.div`
`;


export const CardDetail = styled(CardContainer)`
    position: fixed;
    top: 50%;
    left: 50%;

    display: grid;
    place-items: center;
    grid-template-rows: 1fr auto;
    transform: translate(-50%, -50%);
    grid-template: 
        " name name   power " 1fr
        " icon icon   icon  " 3fr
        " desc desc   desc  " auto
        " .    button .     " auto
        " cost .      .     " 1fr / 1fr 1fr 1fr;
    width: 100px;
    height: 194px;
    z-index: 1;
`;


export const Button = styled(motion.button)`
    font-size: 1rem;
    grid-area: button;
    font-weight: bolder;
    border-radius: 50%;
    background: #df2929;
    border: 2px solid #df2929;
    color: black;
    cursor: pointer;
`;
