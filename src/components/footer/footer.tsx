import { useDispatch, useSelector } from 'react-redux'
import { Card as CardInterface, cardToProps } from '../../interfaces';
import { incrementTurn } from '../../store/slices';
import { playerActions } from '../../store/slices/player/playerSlice';
import { RootState } from '../../store/store';
import { Card } from '../card';
import { Button, CardsContainer, ContainerButton, Counter, FooterContainer } from './footer.style';

export const Footer = () => {
    const hand = useSelector((state: RootState) => state.player.hand);
    const deck = useSelector((state: RootState) => state.player.deck);
    const turn = useSelector((state: RootState) => state.world.turn);
    const mana = useSelector((state: RootState) => state.player.mana);
    const maxTurns = useSelector((state: RootState) => state.world.maxTurns);
    const dispatch = useDispatch();

    const onClickDone = () => {
        if (turn < maxTurns) {
            dispatch(incrementTurn());
            dispatch(playerActions.setMana({ mana: turn + 1 }))
            const drawedCard: CardInterface = deck[0] as CardInterface;
            console.log({ drawedCard });
            if (drawedCard) {
                dispatch(playerActions.removeCardFromDeck({ card: drawedCard }))
                dispatch(playerActions.addCardToHand({ card: drawedCard }));
            }
        } else {
            console.log("Deck is empty");
        }
    }

    return <FooterContainer>
        <CardsContainer>
            {hand.map((card: any) => <Card {...cardToProps(card)} key={card.id} size="medium" />)}
        </CardsContainer>
        <ContainerButton>
            <Counter><>{turn} / {maxTurns}</></Counter>
            <Counter><>{mana} / {turn}</></Counter>
            <Button onClick={onClickDone}>Done</Button>
        </ContainerButton>
    </FooterContainer>

}