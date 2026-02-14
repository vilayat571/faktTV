import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CATEGORIES, type News } from "../types";
import Layout from "../layout/Layout";
import {
  Type,
  ArrowLeft,
  Calendar,
  User,
  Bookmark,
  Link as LinkIcon,
  Check,
  BookmarkCheck,
  Eye,
  EyeOff,
  Copy,
} from "lucide-react";
import NewsCard from "../components/NewsCard";
import { API_ENDPOINT } from "../constants/urls";
import { fetchNewsById } from "../api/api";
import { useMetaTags } from "../hooks/useMetaTags";
import "../assets/styles/newsDetail.css";
import { formatDate } from "../constants/formatDate";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<News | null>(null);
  const [relatedNews, setRelatedNews] = useState<News[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const [copied, setCopied] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isRead, setIsRead] = useState(false);

  // Check if news is saved on mount
  useEffect(() => {
    if (news) {
      const savedNews = JSON.parse(localStorage.getItem("savedNews") || "[]");
      setIsSaved(savedNews.some((item: News) => item._id === news._id));

      const readNews = JSON.parse(localStorage.getItem("readNews") || "[]");
      setIsRead(readNews.some((item: News) => item._id === news._id));
    }
  }, [news]);

  // Helper function to strip HTML tags from body
  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Helper function to generate clean description
  const generateDescription = (body: string, maxLength: number = 160) => {
    const text = stripHtml(body);
    return text.length > maxLength
      ? text.substring(0, maxLength).trim() + "..."
      : text;
  };

  // Generate keywords from title and category
  const generateKeywords = (title: string, category: string) => {
    const titleWords = title
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3)
      .slice(0, 5)
      .join(", ");

    return `${category}, ${titleWords}, FAKT TV, Azərbaycan xəbərləri, son xəbərlər`;
  };

  // Dynamic meta tags with dynamic OG image generation
  useMetaTags({
    title: news?.title || "Xəbər Yüklənir",
    description:
      news?.description ||
      (news?.body
        ? generateDescription(news.body)
        : "FAKT TV - Azərbaycan və dünya xəbərləri"),
    url: `https://www.fact-news.info/news/${id}`,
    author: news?.author,
    publishedTime: news?.date,
    category: news?.category,
    keywords: news ? generateKeywords(news.title, news.category) : undefined,
  });

  useEffect(() => {
    if (!id) return;

    const loadNewsDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchNewsById(id);
        setNews(data.news);

        if (data.news) {
          await fetchRelatedNews(data.news);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load news. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadNewsDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchRelatedNews = async (currentNews: News) => {
    try {
      const titleWords = currentNews.title
        .toLowerCase()
        .split(" ")
        .filter((word) => word.length > 3)
        .slice(0, 3);

      let related: News[] = [];

      if (titleWords.length > 0) {
        const searchQuery = titleWords[0];
        const searchRes = await fetch(
          `${API_ENDPOINT}/news?title=${encodeURIComponent(searchQuery)}&limit=10`,
        );
        const searchData = await searchRes.json();
        related = searchData.news.filter((item: News) => item._id !== id);
      }

      if (related.length < 3) {
        const categoryRes = await fetch(
          `${API_ENDPOINT}/news?category=${currentNews.category}&limit=10`,
        );
        const categoryData = await categoryRes.json();

        const filtered = categoryData.news
          .filter((item: News) => item._id !== id)
          .sort(() => Math.random() - 0.5);

        const existingIds = new Set(related.map((item) => item._id));
        const additional = filtered.filter(
          (item: News) => !existingIds.has(item._id),
        );

        related = [...related, ...additional];
      }

      setRelatedNews(related.slice(0, 3));
    } catch (err) {
      console.error("Failed to fetch related news:", err);
      setRelatedNews([]);
    }
  };



  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 28));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 14));
  };

  const resetFontSize = () => {
    setFontSize(22);
  };

  const copyLinkToClipboard = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const copyTextToClipboard = async () => {
    if (!news) return;

    try {
      const textContent = stripHtml(news.body);
      const fullText = `${news.title}\n\nMüəllif: ${news.author}\nTarix: ${formatDate(news.date)}\n\n${textContent}`;
      await navigator.clipboard.writeText(fullText);
      setTextCopied(true);
      setTimeout(() => setTextCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const toggleSaveNews = () => {
    if (!news) return;

    const savedNews = JSON.parse(localStorage.getItem("savedNews") || "[]");

    if (isSaved) {
      // Remove from saved
      const filtered = savedNews.filter((item: News) => item._id !== news._id);
      localStorage.setItem("savedNews", JSON.stringify(filtered));
      setIsSaved(false);
    } else {
      // Add to saved
      savedNews.unshift(news);
      localStorage.setItem("savedNews", JSON.stringify(savedNews));
      setIsSaved(true);
    }

    // Dispatch custom event to update navbar count
    window.dispatchEvent(new Event("savedNewsUpdated"));
  };

  const toggleReadNews = () => {
    if (!news) return;

    const readNews = JSON.parse(localStorage.getItem("readNews") || "[]");

    if (isRead) {
      // Mark as unread
      const filtered = readNews.filter((item: News) => item._id !== news._id);
      localStorage.setItem("readNews", JSON.stringify(filtered));
      setIsRead(false);
    } else {
      // Mark as read
      readNews.unshift(news);
      localStorage.setItem("readNews", JSON.stringify(readNews));
      setIsRead(true);
    }

    // Dispatch custom event to update navbar count
    window.dispatchEvent(new Event("readNewsUpdated"));
  };

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white">
          <div className="bg-red-50 border-2 border-red-200 text-red-700 px-8 py-6 rounded-xl shadow-lg">
            <p className="text-lg font-medium">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-orange-200 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin absolute top-0"></div>
            </div>
            <p className="text-gray-700 text-xl font-medium">
              Xəbər yüklənir...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!news) {
    return null;
  }

  return (
    <Layout>
      <div className="w-full py-5 bg-linear-to-b from-gray-50 to-white">
        <div className="w-11/12 mx-auto  ">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="group mb-8 inline-flex items-center gap-3 bg-linear-to-r from-gray-900 to-black text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeIn cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Geri</span>
          </button>

          {/* Article Card */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slideInUp">
            {/* Header Section with Gradient */}
            <div className="relative bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white p-8 lg:p-12">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                  }}
                ></div>
              </div>

              {/* Decorative blurs */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* Category Badge */}
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase rounded-full mb-6 shadow-lg">
            {CATEGORIES.find((item)=>item.value==news.category)?.name}
                </span>

                {/* Title */}
                <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight drop-shadow-lg">
                  {news.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{news.author}</span>
                  </div>
                  <span className="text-white/50">•</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(news.date)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div className="border-b border-gray-100 bg-gray-50/50 px-8 py-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Font Size Controls */}
                <div className="flex items-center gap-3 bg-white rounded-xl p-2 shadow-sm border border-gray-200">
                  <Type className="w-4 h-4 text-gray-600" />
                  <div className="flex gap-1">
                    <button
                      onClick={decreaseFontSize}
                      className="px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 text-sm font-semibold cursor-pointer"
                      title="Mətn ölçüsünü azalt"
                    >
                      A-
                    </button>
                    <button
                      onClick={resetFontSize}
                      className="px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 text-sm font-semibold cursor-pointer"
                      title="Normal mətn ölçüsü"
                    >
                      A
                    </button>
                    <button
                      onClick={increaseFontSize}
                      className="px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 text-sm font-semibold cursor-pointer"
                      title="Mətn ölçüsünü artır"
                    >
                      A+
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyTextToClipboard}
                    className="relative p-2.5 bg-white rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-200 group cursor-pointer"
                    title={textCopied ? "Mətn kopyalandı!" : "Mətni kopyala"}
                  >
                    {textCopied ? (
                      <Check className="w-5 h-5 text-green-500 group-hover:text-white animate-scaleIn" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    )}
                    {textCopied && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap animate-fadeIn">
                        Mətn kopyalandı!
                      </span>
                    )}
                  </button>
                  <button
                    onClick={copyLinkToClipboard}
                    className="relative p-2.5 bg-white rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-200 group cursor-pointer"
                    title={copied ? "Link kopyalandı!" : "Linki kopyala"}
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-500 group-hover:text-white animate-scaleIn" />
                    ) : (
                      <LinkIcon className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    )}
                    {copied && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap animate-fadeIn">
                        Link kopyalandı!
                      </span>
                    )}
                  </button>
                  <button
                    onClick={toggleReadNews}
                    className={`relative p-2.5 bg-white rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-sm border border-gray-200 group cursor-pointer ${isRead ? "bg-linear-to-r from-blue-500 to-blue-600" : ""}`}
                    title={
                      isRead
                        ? "Oxunmuş olaraq işarələnib"
                        : "Oxunmuş kimi işarələ"
                    }
                  >
                    {isRead ? (
                      <Eye className="w-5 h-5 text-white animate-scaleIn" />
                    ) : (
                      <EyeOff className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    )}
                  </button>
                  <button
                    onClick={toggleSaveNews}
                    className={`relative p-2.5 bg-white rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-sm border border-gray-200 group cursor-pointer ${isSaved ? "bg-linear-to-r from-orange-500 to-red-500" : ""}`}
                    title={isSaved ? "Yadda saxlanılıb" : "Yadda saxla"}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="w-5 h-5 text-white animate-scaleIn" />
                    ) : (
                      <Bookmark className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Article Content - READ-ONLY REACT QUILL */}
            {/* Article Content - READ-ONLY REACT QUILL */}
            <div className="py-5 px-6">
              <div
                style={{ fontSize: `${fontSize}px` }}
                className="dynamic-font-wrapper"
              >
                <ReactQuill
                  theme="snow"
                  value={news.body}
                  readOnly={true}
                  modules={{ toolbar: false }}
                  className="read-only-quill"
                />
              </div>
            </div>
          </article>

          {/* Related News Section */}
          {relatedNews.length > 0 && (
            <section className="mt-16 animate-fadeIn">
              <div className="flex items-center mb-8 pb-4 border-b-2 border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-linear-to-r from-gray-900 to-black text-white px-5 py-2.5 rounded-xl shadow-lg">
                    <h2 className="text-lg font-bold uppercase tracking-wide">
                      Oxşar Xəbərlər
                    </h2>
                  </div>
                </div>
                <div className="hidden md:flex flex-1 ml-6">
                  <div className="w-full h-1 bg-linear-to-r from-orange-500/30 via-red-500/30 to-transparent rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedNews.map((item, index) => (
                  <div
                    key={item._id}
                    className="animate-fadeInUp"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "both",
                    }}
                  >
                    <NewsCard news={item} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <style>
        {`
          .read-only-quill .ql-container {
  border: none !important;
  font-family: "Georgia", "Times New Roman", serif;
  font-size: ${fontSize}px;
  padding:0px;
}
  `}
      </style>
    </Layout>
  );
};

export default NewsDetail;
