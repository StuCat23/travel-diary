export type Entry = {
  id: string;
  title: string;
  notes?: string | null;
  location?: string | null;
  lat?: number | null;
  lng?: number | null;
  date?: string | null;
  createdAt: string;
};
