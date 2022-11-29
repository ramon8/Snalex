import { ICard } from "./Card.interface";

export interface IPlayer {
    id: number;
    name: string;
    mana: number;
    hand: ICard[];
    deck: ICard[];
}