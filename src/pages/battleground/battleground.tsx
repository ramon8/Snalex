import { useState } from "react"
import { IWorld } from "../../interfaces/World.interface"
import { ICard } from './../../interfaces'
import { cardsInHandMock, cardsInWorldMock, worldMock } from "./battleground.mocks"
import { BattleGroundContainer, Card, ContainerWorlds, Hand, World } from "./battleground.styles"
import { Location } from './../../components'
import { ILocation } from "../../interfaces/Location.interface"

export const Battleground = () => {
    // The cards in the world
    const [cardsInWorld, setCardsInWorld] = useState<ICard[]>(cardsInWorldMock)
    // The cards of the user
    const [cardsInHand, setCardsInHand] = useState<ICard[]>(cardsInHandMock)
    // The world contains the locations;
    const [world, setWorld] = useState<IWorld>(worldMock);

    /**
     * Event that triggers with the event `onDragEnd`
     * It has to remove the card from the cardsInHand state and add that card in the
     * cardsInWorld state 
     * @param card
     */
    const onDragCardInHandEnd = (card: ICard) => () => {
        setCardsInHand((cards: ICard[]) => {
            // get the index of the cards in the cardsInHand list
            const cardToRemoveIndex = cards.findIndex(({ id }: ICard) => card.id === id)
            cards.splice(cardToRemoveIndex, 1);
            return cards;
        })
        // add the card in the cardsInWorld list
        setCardsInWorld([...cardsInWorld, card])
    }

    return (
        <BattleGroundContainer>
            <World values={cardsInWorld} onReorder={setCardsInWorld}>
                {world.locations.map((location: ILocation) => {
                    return <Location key={location.id} {...location} />
                })}
            </World>
        </BattleGroundContainer>
    )
}