import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{ fontFamily: 'font-family: Andale Mono, monospace' }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}