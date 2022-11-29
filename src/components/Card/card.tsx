import { ICard } from "../../interfaces"
import { CardContainer } from "./card.styles"

export const Card = (props: ICard) => {
    return <CardContainer>{props.name}</CardContainer>
}