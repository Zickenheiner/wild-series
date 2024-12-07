import type { RequestHandler } from "express";
import programsRepository from "./programsRepository";

const browse: RequestHandler = async (req, res) => {
  const programs = await programsRepository.readAll();
  res.json(programs);
};

const read: RequestHandler = async (req, res) => {
  const id = Number.parseInt(req.params.id);
  const program = await programsRepository.read(id);
  res.json(program);
};

// Export it to import it somewhere else

export default { browse, read };
