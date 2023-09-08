import { NextApiRequest, NextApiResponse } from "next";

import gitHandler from "../../../lib/gitHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { url },
  } = req;

  switch (method) {
    case "POST":
      try {
        const success = gitHandler(url);
        if (success) {
          res.status(200);
        } else {
          res.status(500).end("Error writing to git repo");
        }
      } catch (err) {
        console.log(err);
        res.status(500).end("Error writing to git repo");
      }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
