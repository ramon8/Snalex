export interface ICard {
    id: number;
    name: string;
    mana: number;
    power: number;
    image?: string;
    description?: string;

    onDragEnd?: (e: any) => void
    onDragStart?: (e: any) => void
}