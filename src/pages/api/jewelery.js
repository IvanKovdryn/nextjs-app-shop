import { jewelery } from "./data/jewelery";

export default function handler(req, res) {
  res.status(200).json(jewelery);
}
