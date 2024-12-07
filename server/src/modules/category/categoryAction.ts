import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const category = categories.find(
    (category) => category.id === Number.parseInt(req.params.id),
  );
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

export default { browse, read };
