import { useRef } from "react"
import { Card } from "../../components"
import { Footer } from "../../components/footer/footer"
import { World } from "../../components/world/world"
import { tomatoCardMock } from "../../mocks/card.mock"
import { BattleGroundContainer } from "./battleground.styles"

export const Battleground = () => {
    const ref = useRef(null);
    return <BattleGroundContainer ref={ref}>
        <World />
        <Footer />
    </BattleGroundContainer>
}