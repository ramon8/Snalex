import { LocationContainer, OponentCards, PlayerCards, Points } from "./location.style"
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { LocationProps } from "./location.props";
import { PropsWithChildren } from "react";
import { Location as LocatoinInterface } from './../../interfaces/Location.interface'
import { CardProps } from "@mui/material";
import { Card } from "../card";
import { Card as CardInterface, cardToProps } from "../../interfaces";
export const Location = ({ name, id }: LocationProps) => {
    const { locations } = useSelector((state: RootState) => state.locations);


    const location = useSelector((state: RootState) => state.locations).locations.find((location: LocatoinInterface) => location.id === id)
    return <LocationContainer data-id={id}>
        <OponentCards>
            {location?.oponentCards.map((card: CardInterface) =>
                <Card key={card.id} {...cardToProps(card)} drag={false} />)}
        </OponentCards>
        <Points>
            <div>{location?.oponentPoints}</div>
            {name}
            <div>{location?.playerPoints}</div>
        </Points>
        <PlayerCards>
            {location?.playerCards.map((card: CardInterface) =>
                <Card key={card.id} {...cardToProps(card)} drag={false} />)}
        </PlayerCards>
    </LocationContainer>
}