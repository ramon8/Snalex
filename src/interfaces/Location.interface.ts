import { ICard } from "./Card.interface";
import { IPlayer } from "./Player.interface";

export interface ILocation {
    id: string;
    name: string;
    playerPoints: number;
    oponentPoints: number;
    playerCards: ICard[];
    oponentCards: ICard[];

    onDrop?: () => void
}