import React from "react";
import { fontsStyle, roboto } from "../src/fonts";
import { App } from "@/components/App";

import "../src/app/reset.css";
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
      <div
        style={{ ...fontsStyle, border: "1px solid #ddd" }}
        className={roboto.className}
      >
        <App>
          <Story />
        </App>
      </div>
    ),
  ],
};

export default preview;
