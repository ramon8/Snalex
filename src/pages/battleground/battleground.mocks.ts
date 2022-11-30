import { ICard } from "../../interfaces";
import { ILocation } from "../../interfaces/Location.interface";
import { IPlayer } from "../../interfaces/Player.interface";
import { IWorld } from "../../interfaces/World.interface";
import { card1Mock, card2Mock, card3Mock, deckMock } from "../../mocks/card.mocks";
import { locationsMock } from "../../mocks/location.mock";

export const playerMock: IPlayer = {
    id: 0,
    deck: deckMock,
    hand: [card1Mock, card2Mock, card3Mock],
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
    turn: 1,
    maxTurns: 6,
}