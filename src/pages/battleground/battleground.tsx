import { BaseSyntheticEvent, useState } from "react"
import { IWorld } from "../../interfaces/World.interface"
import { ICard } from './../../interfaces'
import { worldMock } from "./battleground.mocks"
import { BattleGroundContainer, Hand, HandContainer, Mana, NextButton, World } from "./battleground.styles"
import { Card, Location } from './../../components'
import { ILocation } from "../../interfaces/Location.interface"

export const Battleground = () => {
    // The world contains the locations;
    const [world, setWorld] = useState<IWorld>(worldMock);

    // The card that is beign dragged
    const [draggedCard, setDraggedCard] = useState<ICard | null>(null);

    /** Sets a card in a specific location */
    const setCardInLocations = (locationIndex: number) => {
        const localWorld = { ...world };

        localWorld.locations[locationIndex].playerCards.push(draggedCard as ICard)
        localWorld.player.hand.splice(localWorld.player.hand.findIndex((card: ICard) => card.id === draggedCard?.id), 1)
        localWorld.player.mana = draggedCard && world.player.mana - draggedCard?.mana || 0;

        setWorld(localWorld)
    }
    const onDragStart = (card: ICard) => () => {
        setDraggedCard(card);
    }

    /**
     * Event that triggers with the event `onDragEnd`
     * It has to remove the card from the cardsInHand state and add that card in the
     * cardsInWorld state 
     * @param card
     */
    const onDragCardInHandEnd = (card: ICard) => () => {

    }

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const nextTurn = () => {
        const localWorld = { ...world };
        localWorld.turn++;
        localWorld.player.mana = localWorld.turn;

        const key = getRandomInt(localWorld.player.deck.length - 1);
        const deckCard = localWorld.player.deck[key];
        localWorld.player.deck.splice(key, 1)

        localWorld.player.hand.push(deckCard)

        setWorld(localWorld);
    }

    const onCardDrop = (e: any) => {
        if (draggedCard && world.player.mana - draggedCard?.mana >= 0) {
            const id = document.elementsFromPoint(e.clientX, e.clientY).find((elem: any) => elem.attributes['data-id'])?.attributes['data-id' as any].value;
            if (id) setCardInLocations(world.locations.findIndex((location: ILocation) => location.id === id));
            setDraggedCard(null);
        } else {
            console.log('no mana')
        }
    }

    return (
        <BattleGroundContainer>
            <World>
                {world.locations.map((location: ILocation) => {
                    return <Location key={location.id} {...location} />
                })}
            </World>
            <HandContainer>
                <NextButton onClick={nextTurn} variant="contained">Next</NextButton>
                <Mana>{world.player.mana}</Mana>
                <Hand values={world.player.hand} onReorder={() => null}>
                    {world.player.hand?.map((card: ICard) =>
                        <Card key={card.id} {...card} onDragStart={onDragStart(card)} onDragEnd={onCardDrop} />
                    )}
                </Hand>
            </HandContainer>
        </BattleGroundContainer>
    )
}