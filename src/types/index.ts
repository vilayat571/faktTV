export interface News {
  _id: string;
  title: string;
  body: string;
  date: string;
  category: string;
  author: string;
  description: string;
  thumbnail: string;
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
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Advertise", path: "/ads" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
];
