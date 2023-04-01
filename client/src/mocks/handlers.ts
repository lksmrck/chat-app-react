import { rest } from "msw";
import conversations from "../mocks/json/conversations.json";
import messages from "../mocks/json/messages.json";

export const handlers = [
  rest.get("http://localhost:8000/conversations/7weiqw96qwkqpkew78qwopq", (req, res, ctx) => {
    return res(ctx.json(conversations));
  }),
  rest.get("http://localhost:8000/messages/vee73o258d", (req, res, ctx) => {
    return res(ctx.json(messages));
  }),
];
