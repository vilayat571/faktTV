import { Link } from "react-router-dom";
import type { News } from "../types";
import { Sparkles } from "lucide-react";
import { formatDate } from "../constants/formatDate";

interface MainNewsProps {
  news: News;
}

const MainNews = ({ news }: MainNewsProps) => {
  return (
    <>
      {news && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">
                Günün Xəbəri
              </span>
            </div>
            <div className="flex-1 h-1 bg-linear-to-r from-orange-500 via-red-500 to-transparent rounded-full"></div>
          </div>

          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-7 bg-linear-to-b from-orange-500 to-orange-600 rounded-full"></div>
              <h2 className="text-gray-600 text-sm font-bold uppercase tracking-wide">
                Ən son xəbərlər
              </h2>
            </div>
            <Link to={`/news/${news._id}`} className="block group">
              <div className="relative bg-black text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-linear-to-r from-orange-500/0 via-orange-500/0 to-orange-500/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-orange-500/30 transition-all duration-500"></div>
                <div className="relative p-8 md:p-10">
                  <div className="inline-block mb-5">
                    <span className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 text-xs font-bold uppercase rounded-full shadow-md group-hover:shadow-orange-500/50 transition-shadow duration-300">
                      {news.category}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold mb-6 leading-tight group-hover:text-orange-50 transition-colors duration-300">
                    {news.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span className="font-medium text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                      {news.author}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">
                      {formatDate(news.date)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-orange-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default MainNews;
