import { rest } from "msw";
import conversations from "../mocks/json/conversations.json";

export const handlers = [
  rest.get("http://localhost:8000/conversations/7sdLnnhMlucSlyvu1Vex4W0iH4f2", (req, res, ctx) => {
    return res(ctx.json(conversations));
  }),
];
