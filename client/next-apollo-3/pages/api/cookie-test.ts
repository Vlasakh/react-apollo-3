// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // To Write a Cookie
  res.setHeader('Set-Cookie', `mycCookie=TEST TETS 3003; Path=/`);
  // 'Set-Cookie': `mycookie=test`,
  res.setHeader('Content-Type', `text/plain`);

  res.status(200).json({ cookie: 'was set to /api/test' });
}
