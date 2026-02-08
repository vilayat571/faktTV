/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import type { News } from "../types";
import NewsCard from "../components/NewsCard";
import { API_ENDPOINT } from "../constants/urls";
import { TrendingUp, } from "lucide-react";
import Layout from "../layout/Layout";
import LoadingSkeleton from "../components/LoadingSkeleton";
import MainNews from "./MainNews";

const HomePage = () => {
  const [mainStory, setMainStory] = useState<News | null>(null);
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      try {
        const [mainStoryRes, newsRes] = await Promise.all([
          fetch(`${API_ENDPOINT}/news?limit=1&page=1`),
          fetch(`${API_ENDPOINT}/news?limit=10&page=1`),
        ]);

        const mainStoryData = await mainStoryRes.json();
        const newsData = await newsRes.json();

        setMainStory(mainStoryData.news[0]);
        setNews(newsData.news);

        if (newsData.news.length < 6) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMore = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const nextPage = page + 1;
      const res = await fetch(`${API_ENDPOINT}/news?limit=15&page=${nextPage}`);
      const data = await res.json();

      if (data.news.length > 0) {
        setNews([...news, ...data.news]);
        setPage(nextPage);

        if (data.news.length < 6) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, loading, page, news]);

  // Loading Skeleton
  if (initialLoading) {
    return (
      <Layout>
        <LoadingSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Main Story Section */}
          {mainStory && <MainNews news={mainStory} />}

          {/* Latest News Section */}
          {news.length > 0 && (
            <section className="mb-12">
              {/* Section Header with modern styling */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-linear-to-r from-gray-900 to-black text-white px-5 py-2.5 rounded-xl shadow-lg group hover:shadow-xl transition-shadow duration-300">
                    <TrendingUp className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                    <h2 className="text-lg font-bold uppercase tracking-wide">
                      Son Xəbərlər
                    </h2>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Canlı Yenilənirlər</span>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className="hidden md:flex flex-1 ml-6">
                  <div className="w-full h-1 bg-linear-to-r from-orange-500/30 via-red-500/30 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                {news.map((item) => (
                  <NewsCard key={item._id} news={item} />
                ))}
              </div>

              {/* Simple Loading Indicator */}
              {hasMore && (
                <div
                  ref={observerRef}
                  className="flex justify-center mt-12 py-8"
                >
                  {loading && (
                    <div className="text-center">
                      <div className="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-sm text-gray-500 mt-3">Yüklənir...</p>
                    </div>
                  )}
                </div>
              )}

              {/* End Message */}
              {!hasMore && (
                <div className="flex justify-center mt-12">
                  <div className="text-center py-8 px-6 bg-gray-50 rounded-xl">
                    <p className="text-gray-600 font-medium">
                      Bütün xəbərlər göstərildi
                    </p>
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
