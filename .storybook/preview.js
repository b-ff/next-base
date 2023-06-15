import React from "react";
import { fontsClassName } from "../src/fonts";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <section className={fontsClassName}>
        <Story />
      </section>
    ),
  ],
};

export default preview;
