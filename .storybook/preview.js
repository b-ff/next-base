import React from "react";
import { fontsClassName } from "../src/fonts";
import { App } from "@/components/App";

import "../src/app/globals.css";

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
      <div style={{ border: "1px solid #ddd" }}>
        <App>
          <section className={fontsClassName}>
            <Story />
          </section>
        </App>
      </div>
    ),
  ],
};

export default preview;
