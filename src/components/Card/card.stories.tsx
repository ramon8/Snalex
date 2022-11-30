import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './card';
import { Reorder } from 'framer-motion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Card',
    component: Card,
    decorators: [(Story) => (
        <Reorder.Group onReorder={() => null} values={[]}>
            <Story />
        </Reorder.Group>
    )],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    mana: 5,
    power: 7,

};