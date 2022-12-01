import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { Footer } from "../../components/footer/footer"
import { World } from "../../components/world/world"
import { locationCards } from "../../mocks/card.mock"
import { addCardsToOponent, addCardsToPlayer } from "../../store/slices/location/locationsSlice"
import { BattleGroundContainer } from "./battleground.styles"

export const Battleground = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(addCardsToOponent({ cards: locationCards[0], locationIndex: 0 }));
        // dispatch(addCardsToOponent({ cards: locationCards[2], locationIndex: 1 }));
        // dispatch(addCardsToOponent({ cards: locationCards[3], locationIndex: 2 }));
        // dispatch(addCardsToPlayer({ cards: locationCards[4], locationIndex: 0 }));
        // dispatch(addCardsToPlayer({ cards: locationCards[5], locationIndex: 1 }));
        // dispatch(addCardsToPlayer({ cards: locationCards[6], locationIndex: 2 }));
    });
    return <BattleGroundContainer ref={ref}>
        <World />
        <Footer />
    </BattleGroundContainer>
}
