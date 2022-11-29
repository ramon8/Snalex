import { ICard } from "../../interfaces";
import { ILocation } from "../../interfaces/Location.interface";
import { Card } from "../Card";
import { CardsContainer, LocationContainer, PointsContainer } from "./location.styles";

export const Location = (props: ILocation) => {
    return <LocationContainer>
        <CardsContainer>{props.oponentCards.map((card: ICard) => <Card key={card.id} {...card} />)}</CardsContainer>
        <PointsContainer>{props.oponentPoints}</PointsContainer>
        <h4>
            {props.name}
        </h4>
        <PointsContainer>{props.oponentPoints}</PointsContainer>
        <CardsContainer>{props.oponentCards.map((card: ICard) => <Card key={card.id} {...card} />)}</CardsContainer>
    </LocationContainer>
}
