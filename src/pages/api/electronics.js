import { electronics } from "./data/electronics";

export default function handler(req, res) {
  res.status(200).json(electronics);
}
