import { CardProps } from "../components/card/card.props";
import { LocationProps } from "../components/location/location.props";
import { fruits } from "../mocks/fruits.mock";
import { Card } from "./Card.interface";

export interface Location {
    id: string,
    name: string,
    oponentPoints: number,
    playerPoints: number,
    oponentCards: Card[],
    playerCards: Card[],
}

export const locationAdapter = ({ name, id }: Location): LocationProps => ({
    id,
    name
})