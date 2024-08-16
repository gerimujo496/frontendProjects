import { Results } from "./results";

export interface Movie {
  dates: { maximum: string; minimum: string };
  page: number;
  results: Results[];
  total_pages: number;
}
