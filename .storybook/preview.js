import React from "react";
import { fontsClassName } from "../src/fonts";
import { SessionProvider } from "next-auth/react";

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
        <SessionProvider>
          <section className={fontsClassName}>
            <Story />
          </section>
        </SessionProvider>
      </div>
    ),
  ],
};

export default preview;
