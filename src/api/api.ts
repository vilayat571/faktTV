import { API_ENDPOINT } from "../constants/urls";


// Add this new function
export const searchNews = async (title: string) => {
  const response = await fetch(`${API_ENDPOINT}/news/?title=${encodeURIComponent(title)}`);
  if (!response.ok) throw new Error("Failed to search news");
  return response.json();
};

export const fetchNewsById = async (id: string) => {
  const response = await fetch(`${API_ENDPOINT}/news/${id}`);
  if (!response.ok) throw new Error("Failed to fetch news");
  return response.json();
};

export const deleteNews = async (id: string) => {
  const response = await fetch(`${API_ENDPOINT}/news/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete news");
  return response.json();
};