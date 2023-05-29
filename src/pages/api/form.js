import { form } from "./data/form";

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    form.push(body);
    return res.json(form);
  }

  return res.status(500).json({
    msg: "this needs to be a post request",
  });
}
