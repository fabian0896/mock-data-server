export interface Module {
  title: string;
  description: string;
  lessons: number[];
}

export interface Content {
  id: number;
  title: string;
  banner: string;
  description: string;
  level: string;
  teacher: number;
  content: Module[];
  score: number;
  limit_date: string;
  created_at: string;
  students: number;
  category: string;
}