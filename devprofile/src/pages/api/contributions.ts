import fetch from 'node-fetch';

const API_URL = 'https://github-contributions-api.now.sh/v1/SouCode';

export default async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
