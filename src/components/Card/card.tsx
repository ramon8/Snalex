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
import { range } from "../../utils/range";

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
    const [position, setPosition] = useState({
        rotateY: '0px',
        rotateX: '0pc',
        perspective: '0px'
    });
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

    const onMouseOver = (e: any) => {
        const { layerX, layerY } = e.nativeEvent;

        // Get the x position of the users mouse, relative to the button itself
        let x = layerX;
        // Get the y position relative to the button
        let y = layerY;

        // Calculate half the width and height
        let halfWidth = 50;
        let halfHeight = 60;

        // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
        // Changing these numbers will change the depth of the effect.
        let calcAngleX = (x - halfWidth) / 6;
        let calcAngleY = (y - halfHeight) / 14;

        let gX = (1 - (x / (halfWidth * 2))) * 100;
        let gY = (1 - (y / (halfHeight * 2))) * 100;

        // Add the glare at the reflection of where the user's mouse is hovering
        // item.querySelector('.glare').style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
        // And set its container's perspective.
        const perspective = `${halfWidth * 6}px`

        // Set the items transform CSS property
        // item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;

        // Reapply this to the shadow, with different dividers
        let calcShadowX = (x - halfWidth) / 3;
        let calcShadowY = (y - halfHeight) / 6;

        // Add a filter shadow - this is more performant to animate than a regular box shadow.
        // item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;


        console.log({ layerX, layerY })
        cardDragging?.id !== id && setPosition({
            rotateY: `${calcAngleX * 3}deg`,
            rotateX: `${calcAngleY * 3}deg`,
            perspective: perspective
        })
    }

    const onMouseLeave = (e: any) => {
        const { layerX, layerY } = e.nativeEvent;
        console.log({ layerX, layerY })
        setPosition({
            rotateY: '0px',
            rotateX: '0pc',
            perspective: '0px'
        })
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
            // onDrag={onMouseOver}
            // onMouseMoveCapture={onMouseOver}
            // onMouseLeave={onMouseLeave}
            onClick={() => dispatch(setSelectedCard({ card: props }))}
            dragMomentum={false}
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