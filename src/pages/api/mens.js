import { mens } from "./data/mens";

export default function handler(req, res) {
  res.status(200).json(mens);
}
