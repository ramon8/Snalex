import { ComponentMeta, ComponentStory } from '@storybook/react';
import { tomatoCardMock } from '../../mocks/card.mock';

import { fruits } from '../../mocks/fruits.mock';
import { Card as CardComponent } from './card';
import { CardProps } from './card.props';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Card',
    component: CardComponent,
    args: tomatoCardMock,
} as ComponentMeta<typeof CardComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardComponent> = (args: CardProps) => <CardComponent {...args} />

export const Card = Template.bind({});
