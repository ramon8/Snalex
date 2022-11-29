import { ICard } from "../../interfaces";
import { ILocation } from "../../interfaces/Location.interface";
import { IPlayer } from "../../interfaces/Player.interface";
import { IWorld } from "../../interfaces/World.interface";

export const cardMock: ICard = {
    id: 0,
    name: 'Card',
    mana: 0,
    power: 0,
}

export const cardsInWorldMock: ICard[] = [
    cardMock
]

export const cardsInHandMock: ICard[] = [
    cardMock,
    cardMock,
    cardMock,
    cardMock
    // Loop the mocks to set diferent id and names
].map((card: ICard, i: number) => ({ ...card, id: i, name: `${card.name} ${i}` }));

export const locationsMock: ILocation[] = [
    {
        id: '0',
        name: 'Location 1',
        oponentPoints: 0,
        playerPoints: 0,
        playerCards: [cardMock, cardMock, cardMock, cardMock],
        oponentCards: [cardMock],
    },
    {
        id: '0',
        name: 'Location 2',
        oponentPoints: 0,
        playerPoints: 0,
        playerCards: [],
        oponentCards: [cardMock, cardMock, cardMock],
    },
    {
        id: '0',
        name: 'Location 3',
        oponentPoints: 0,
        playerPoints: 0,
        playerCards: [cardMock, cardMock],
        oponentCards: [],
    },
]

export const playerMock: IPlayer = {
    id: 0,
    deck: [],
    hand: [],
    mana: 1,
    name: 'Ramon'
}

export const oponentMock: IPlayer = {
    id: 0,
    deck: [],
    hand: [],
    mana: 1,
    name: 'Alex'
}

export const worldMock: IWorld = {
    id: 0,
    name: 'World 01',
    player: playerMock,
    oponent: oponentMock,
    locations: locationsMock,
}