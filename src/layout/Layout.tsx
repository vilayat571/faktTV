import { type ReactNode } from "react";
import { Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-gray-50 via-white to-orange-50">
      <Navbar />
      
      <div className="flex flex-1 relative">
        {/* Left Sidebar - Premium Ad Space */}
        <aside className="hidden xl:flex w-[12%] bg-linear-to-b from-gray-50 to-gray-100 border-r border-gray-200/50">
          <div className="sticky top-24 w-full px-3 py-4">
            <div className="relative h-150 group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-linear-to-b from-orange-400 via-red-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              
              {/* Main container */}
              <div className="relative h-full flex items-center justify-center bg-linear-to-br from-white via-gray-50 to-orange-50 rounded-2xl border-2 border-dashed border-gray-300 group-hover:border-orange-400 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}></div>
                </div>
                
                {/* Content */}
                <div 
                  className="relative z-10 flex flex-col items-center space-y-6 px-4"
                  style={{ 
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                  }}
                >
                  {/* Icon */}

                  
                  {/* Text */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold bg-linear-to-b from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                      Reklam Sahəsi
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-6 leading-relaxed">
                      Burada Sizin Reklamınız Ola Bilər
                    </p>
                    
                    {/* Contact info */}
                    <div className="space-y-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 text-xs text-gray-700">
                        <Phone className="w-4 h-4 text-orange-500" />
                        <span className="font-semibold">+994 50 890 87 27</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full xl:w-[76%] relative">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
        </main>

        {/* Right Sidebar - Premium Ad Space */}
        <aside className="hidden xl:flex w-[12%] bg-linear-to-b from-gray-50 to-gray-100 border-l border-gray-200/50">
          <div className="sticky top-24 w-full px-3 py-4">
            <div className="relative h-150 group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-linear-to-b from-orange-400 via-red-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              
              {/* Main container */}
              <div className="relative h-full flex items-center justify-center bg-linear-to-br from-white via-gray-50 to-orange-50 rounded-2xl border-2 border-dashed border-gray-300 group-hover:border-orange-400 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}></div>
                </div>
                
                {/* Content */}
                <div 
                  className="relative z-10 flex flex-col items-center space-y-6 px-4"
                  style={{ 
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                  }}
                >

                  {/* Text */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold bg-linear-to-b from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                      Reklam Sahəsi
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-6 leading-relaxed">
                      Burada Sizin Reklamınız Ola Bilər
                    </p>
                    
                    {/* Contact info */}
                    <div className="space-y-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 text-xs text-gray-700">
                        <Phone className="w-4 h-4 text-orange-500" />
                        <span className="font-semibold">+994 50 890 87 27</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Layout;