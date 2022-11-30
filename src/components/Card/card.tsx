import { ICard } from "../../interfaces"
import { CardContainer, Mana, Name, Power } from "./card.styles"

export const Card = (props: ICard) => {
    const { id, mana, name, power, onDragStart, onDragEnd } = props;
    return <CardContainer drag as="div" key={id} value={props} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Mana>{mana}</Mana>
        <Name>{name}</Name>
        <Power>{power}</Power>
    </CardContainer>
}