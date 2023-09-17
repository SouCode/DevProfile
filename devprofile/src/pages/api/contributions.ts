import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const API_URL = 'https://github-contributions-api.vercel.app/v1/SouCode';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
