// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // To Write a Cookie
  // res.writeHead(200, {
  //   'Set-Cookie': `mycookie=test`,
  //   'Content-Type': `text/plain`,
  // });

  res.status(200).json({ name: 'check cookies from /api/test' });
}
