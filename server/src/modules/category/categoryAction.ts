import type { RequestHandler } from "express";
import categoryRepository from "./categoryRepository";

const browse: RequestHandler = async (req, res) => {
  const categoryFromDB = await categoryRepository.readAll();
  res.json(categoryFromDB);
};

const read: RequestHandler = async (req, res) => {
  const categoryFromDB = await categoryRepository.read(Number(req.params.id));
  res.json(categoryFromDB);
};

export default { browse, read };
