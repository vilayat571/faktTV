import Layout from "../layout/Layout";
import { Instagram, Youtube, TrendingUp, Mail, Eye, Users } from 'lucide-react';

export function AdsPage() {
  return (
   <Layout>
     <div className="w-full bg-linear-to-b from-gray-50 to-white">
       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="relative bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* Decorative blurs */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Bizimlə Reklam Əməkdaşlığı</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Fakt TV-nin geniş auditoriyasına çatın. Azərbaycanda məlumatlı və aktiv izləyici kütləsi ilə brendinizi tanıdın.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Niyə Fakt TV ilə Əməkdaşlıq?
          </h2>
          
          {/* Main Stat - Total Reach */}
          <div className="bg-linear-to-br from-orange-500 to-red-500 text-white rounded-xl p-8 mb-8 text-center shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Eye className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Ümumi Əhatə</h3>
            </div>
            <div className="text-5xl lg:text-6xl font-bold mb-2">2M+</div>
            <p className="text-xl text-white/90">Aylıq Baxış (Bütün Platformalar)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TikTok */}
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">TikTok</h3>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">~40K</div>
              <p className="text-gray-600">İzləyici</p>
            </div>

            {/* Instagram */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Instagram</h3>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">~20K</div>
              <p className="text-gray-600">İzləyici</p>
            </div>

            {/* YouTube */}
            <div className="bg-linear-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-linear-to-r from-red-500 to-orange-500 p-3 rounded-lg">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">YouTube</h3>
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">~5K</div>
              <p className="text-gray-600">Abunəçi</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-lg p-6">
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-orange-600 mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Keyfiyyətli Auditoriya</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  İzləyicilərimiz Azərbaycanda və dünyada baş verən hadisələrlə maraqlanır, dərin təhlil və obyektiv xəbərlərə üstünlük verir. Brendiniz üçün ideal hədəf auditoriya.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advertising Options */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Reklam Formatları</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Social Media Posts */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Instagram className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Sosial Media Postları</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Instagram, TikTok və YouTube platformalarında brendinizin tanıdılması üçün sponsorlu məzmun.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Story və Post sponsorluğu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Video məzmun inteqrasiyası</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Çoxplatformalı kampaniyalar</span>
                </li>
              </ul>
            </div>

            {/* Video Content */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Youtube className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Video Məzmun</h3>
              </div>
              <p className="text-gray-600 mb-4">
                YouTube və TikTok-da brendli video məzmun və reklam inteqrasiyası.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Pre-roll və mid-roll reklamlar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Məhsul tanıtımı və icmal videoları</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Dedikasiya edilmiş məzmun</span>
                </li>
              </ul>
            </div>

            {/* Brand Collaboration */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Brend Əməkdaşlığı</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Uzunmüddətli tərəfdaşlıq və brend səfirliyi proqramları.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Məzmun seriyaları sponsorluğu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Tədbir və kampaniya tərəfdaşlıqları</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Fərdi reklam həlləri</span>
                </li>
              </ul>
            </div>

            {/* Web Platform */}
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Web Platforması</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Saytımızda banner və sponsorlu məzmun yerləşdirmələri.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Banner reklamları</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Sponsorlu məqalələr</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Kateqoriya təqdimatları</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-2xl shadow-xl p-8 lg:p-10">
          <h2 className="text-3xl font-bold mb-6">Bizimlə Əlaqə</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            Reklam əməkdaşlığı haqqında ətraflı məlumat almaq və brendiniz üçün ən uyğun həlli müzakirə etmək üçün bizimlə əlaqə saxlayın.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-2xl">Reklam Əlaqə</h3>
            </div>
            <a 
              href="mailto:cenabmiri545@gmail.com" 
              className="text-2xl font-bold hover:text-orange-200 transition-colors block break-all"
            >
              cenabmiri545@gmail.com
            </a>
            <p className="text-sm text-white/70 mt-4">
              Reklam sorğuları və əməkdaşlıq təklifləri üçün
            </p>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl">
            <p className="text-sm text-white/90">
              💡 <strong>Qeyd:</strong> Email göndərərkən reklam növü, müddət və büdcə haqqında qısa məlumat əlavə edin ki, sizə daha tez cavab verə bilək.
            </p>
          </div>
        </div>

       </div>
     </div>
   </Layout>
  );
}