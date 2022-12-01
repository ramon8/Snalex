import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { tomatoCardMock } from '../../mocks/card.mock';

import { fruits } from '../../mocks/fruits.mock';
import { ContainerStory } from './cardGroup.styles';
import { CardGroup as CardGroupComponent } from './cardGroup';
import { Card } from '../card/card';
import { useRef } from 'react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/CardGroup',
    component: CardGroupComponent,
    args: {
        id: 'c_1',
        name: 'Tomato',
        description: 'El tomate​ es el fruto de la planta Solanum lycopersicum',
        cost: 0,
        power: 0,
        icon: fruits[0],
    },
} as ComponentMeta<typeof CardGroupComponent>;


export const CardGroup = () => {
    return <ContainerStory>
        <CardGroupComponent />
        <Card {...tomatoCardMock} />
    </ContainerStory>
}
