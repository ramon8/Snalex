export type CardSize = 'small' | 'medium' | 'large';

export interface CardProps {
    constraintsRef?: any;
    dragConstraints?: any;
    size?: CardSize;
    id: string;
    name: string;
    power: number;
    cost: number;
    description: string;
    icon: string;
    drag?: boolean;
}