import { ILocation } from "./Location.interface";
import { IPlayer } from "./Player.interface";

export interface IWorld {
    id: number;
    name: string;
    player: IPlayer;
    oponent: IPlayer;
    turn: number;
    maxTurns: number;
    locations: ILocation[];
}