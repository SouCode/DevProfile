/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import fetch from 'node-fetch';

const API_URL = 'https://github-contributions-api.now.sh/v1/';

interface ContributionData {
  date: string;
  count: number;
}

type YearData = Record<string, ContributionData[]>;

interface ApiResponse {
  years: {
    year: string;
    contributions: ContributionData[];
  }[];
}

export const fetchContributionData = async(): Promise<YearData> => {
  const username = 'SouCode'; 

  try {
    const response = await fetch(`${API_URL}${username}`);
    const data: ApiResponse = await response.json();

    const formattedData: YearData = {};

    data.years.forEach((year) => {
      formattedData[year.year] = year.contributions;
    });

    return formattedData;
  } catch (error) {
    console.error('Error fetching GitHub contribution data:', error);
    throw error;
  }
};

export default fetchContributionData;
