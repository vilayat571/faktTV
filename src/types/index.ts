
// types.ts
export interface News {
  _id: string;
  title: string;
  slug?: string; // ✅ YENİ field
  body: string;
  category: string;
  author: string;
  date: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}


export interface ApiResponse {
  status: string;
  total: number;
  news: News[];
}



export const CATEGORIES = [
  { name: "Siyasət", value: "siyaset" },
  { name: "Dünya", value: "dunya" },
  { name: "Cəmiyyət", value: "cemiyyet" },
  { name: "İqtisadiyyat", value: "iqtisadiyyat" },
  { name: "Məqalələr", value: "meqaleler" },
  { name: "Texnalogiya", value: "texnalogiya" },
];

export const quickLinks = [
  { name: "Haqqımızda", path: "/about" },
  { name: "Əlaqə", path: "/contact" },
  { name: "Reklam", path: "/ads" },
  { name: "Məxfilik", path: "/privacy" },
];
