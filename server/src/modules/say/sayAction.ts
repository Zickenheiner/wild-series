import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (_, res) => {
  res.send("Welcome to Wild Series !");
};

export default { sayWelcome };
