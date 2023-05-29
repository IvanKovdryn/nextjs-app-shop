import { womens } from "./data/womens";

export default function handler(req, res) {
  res.status(200).json(womens);
}
