import { ICard } from "../../interfaces";
import { ILocation } from "../../interfaces/Location.interface";
import { Card } from "../card";
import { CardsContainer, LocationContainer, PointsContainer } from "./location.styles";

export const Location = (props: ILocation) => {
    const onReorder = () => null
    const onDrop = () => {
        props.onDrop && props.onDrop();
    }


    return <LocationContainer>
        <CardsContainer as="div" values={props.oponentCards} onReorder={onReorder}>
            {props.oponentCards?.map((card: ICard) => <Card key={card.id} {...card} />)}
        </CardsContainer>
        <PointsContainer>{props.oponentPoints}</PointsContainer>
        <h4>{props.name}</h4>
        <PointsContainer>{props.playerCards.map((card: ICard) => card.power).reduce((a, b) => a + b, 0)}</PointsContainer>
        <CardsContainer data-id={props.id} as="div" onReorder={onReorder} values={props.oponentCards}>
            {props.playerCards?.map((card: ICard) => <Card key={card.id} {...card} />)}
        </CardsContainer>
    </LocationContainer>
}
