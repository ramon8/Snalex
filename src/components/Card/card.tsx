import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Card as CardInterface, propsToCard } from "../../interfaces";
import { setCardDragging, setSelectedCard } from "../../store/slices/game/gameSlice";
import { pushInPlayerCards, setPlayerPoints } from "../../store/slices/location/locationsSlice";
import { RootState } from "../../store/store";
import { CardProps } from "./card.props"
import { CardContainer, Cost, Power, Name, Description, Icon, CardDetail, CardDetailContainer, Button } from "./card.styles"
import { Location } from './../../interfaces/Location.interface'
import { playerActions } from "../../store/slices/player/playerSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Card = (props: CardProps) => {
    const {
        name,
        cost,
        power,
        icon,
        dragConstraints,
        constraintsRef,
        description,
        id,
        drag = true
    } = props;

    const dispatch = useDispatch();
    const cardDragging = useSelector((state: RootState) => state.game.cardDragging);
    const mana = useSelector((state: RootState) => state.player.mana);
    const selectedCard = useSelector((state: RootState) => state.game.selectedCard);
    const locations = useSelector((state: RootState) => state.locations.locations);
    const onDragStart = (e: any) => {
        dispatch(setCardDragging({ card: propsToCard(props) }))
        e.stopPropagation();
    }

    const onDragEnd = (e: any) => {
        const id = document.elementsFromPoint(e.clientX, e.clientY).find((elem: any) => elem.attributes['data-id'])?.attributes['data-id' as any].value;
        const location = locations.find((location: Location) => location.id === id)
        if (location && props.cost <= mana && location.playerCards.length < 4) {

            let locationIndex = locations.findIndex((location: Location) => location.id === id)

            // The dragged card is not added to the list yet so we need to merge the actual list with the card
            const powerArray = [...location?.playerCards as CardInterface[], props].map((card: CardInterface) => card.power) || [];
            const power = powerArray.reduce((a: number, b: number) => a + b, 0);

            if (location) {
                dispatch(pushInPlayerCards({ locationIndex, card: props }))
                dispatch(playerActions.removeCardFromHand({ card: props }))
                dispatch(playerActions.setMana({ mana: mana - props.cost }))
                dispatch(setPlayerPoints({ ammount: power || 0, locationIndex }))
            }
        }
        dispatch(setCardDragging({ card: null }))
    }

    return <>
        {selectedCard?.id !== id && <CardContainer
            layoutId={id}
            drag={drag}
            dragElastic={1}
            whileDrag={{ scale: 2, zIndex: 1 }}
            dragConstraints={dragConstraints || constraintsRef}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        // onClick={() => dispatch(setSelectedCard({ card: props }))}
        >
            <Cost>{cost}</Cost>
            <Power>{power}</Power>
            <Name id="name">{name}</Name>
            <Icon>{icon}</Icon>
        </CardContainer>}
        <AnimatePresence>
            {selectedCard?.id === id && (
                <CardDetail
                    initial={{ scale: 1 }}
                    animate={{ scale: 4 }}
                    transition={{ duration: .4 }}
                    exit={{
                        transition: { duration: .4 }
                    }}
                    layoutId={selectedCard?.id}
                >
                    <Cost>{cost}</Cost>
                    <Power>{power}</Power>
                    <Name id="name">{name}</Name>
                    <Description
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: .4 }}>{description}</Description>
                    <Icon>{icon}</Icon>
                    <Button
                        onClick={() => {
                            dispatch(setSelectedCard({ card: null }))
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} >✕</Button>
                </CardDetail>
            )}
        </AnimatePresence></>
}