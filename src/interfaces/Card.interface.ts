import { CardProps } from "../components/card/card.props";
import { fruits } from "../mocks/fruits.mock";

export interface Card {
    id: string;
    name: string;
    cost: number;
    power: number;
    image?: string;
    description: string;
    icon: string;
}

export const cardToProps = ({ name, cost, description, power, id, icon }: Card): CardProps => ({
    cost,
    description,
    id,
    name,
    power,
    constraintsRef: {},
    dragConstraints: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    icon
})

export const propsToCard = ({ description, icon, cost, power, name, id }: CardProps): Card => ({
    description,
    icon,
    id,
    cost,
    name,
    power,
})