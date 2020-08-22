export interface JournalReference {
  authors: string;
  title: string;
  journal: string;
  volume: string | number | null;
  issue: string | number | null;
  pages: string | null;
  year: number;
  doi: string | null;
}
