// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import React from "react";

global.fetch = jest.fn(async () => ({
  json: jest.fn(async () => []),
  text: jest.fn(),
  ok: true,
}));

const SessionContext = React.createContext({});

jest.mock("next-auth/react", () => ({
  SessionProvider: (props) => <div {...props} />,
  SessionContext,
  useSession: jest.fn(() => React.useContext(SessionContext)),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));
