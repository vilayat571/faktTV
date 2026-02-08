import { Shield, Target, Users, CheckCircle } from "lucide-react";
import Layout from "../layout/Layout";

export function AboutPage() {
  return (
    <Layout>
      <div className="w-full bg-linear-to-b from-gray-50 to-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header Section */}
          <div className="relative bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10" />
                <h1 className="text-3xl lg:text-5xl font-bold">Haqqımızda</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl">
                Fakt TV - doğru, faydalı və obyektiv xəbərlərin çatdırılması məqsədilə qurulmuş bir platformadır.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Yerli və qlobal medianın diqqətdən kənarda qoyduğu və ya qərəzli yanaşdığı hadisələrə ədalətli və əcdadlarımızın dəyərləri prizmasından baxaraq, onları izləyicilərimizə xəbər formatında təqdim edirik.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Müasir dövrdə vaxtın azlığı, işlərin çoxluğu və durmadan dəyişən hadisələrin fonunda izləyicilərimizin vaxtını qənaətlə istifadə etməsini önə çəkirik. Bu məqsədlə, ən vacib, faydalı və əhəmiyyətli xəbərləri seçərək onları qısa müddətdə sizə çatdırırıq.
              </p>
            </div>

            {/* Our Story */}
            <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Bizim Hekayəmiz</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Biz uzun müddət Teleqram platformasında operativ xəbərçiliklə məşğul olmuş bir komandayıq. Lakin informasiya axınının sürətlə ötüb keçdiyi dövrdə yalnız xəbəri çatdırmağın kifayət etmədiyini gördük. Oxucuya sadəcə nə baş verdiyini deyil, niyə və necə baş verdiyini izah edən bir platformaya ehtiyac var idi. Məhz bu ehtiyacdan yola çıxaraq saytımızı — dərin təhlil və fakt əsaslı araşdırmalar məkanını yaratdıq.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Məqsədimiz</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Azərbaycan mediasında çox vaxt kölgədə qalan, səthi işıqlandırılan və ya ümumiyyətlə diqqətdən kənarda qalan mövzuları gündəmə gətirmək. Biz kütləvi xəbər istehsalı ilə deyil, yalnız ən vacib hadisələr və onların mahiyyəti ilə çıxış edirik.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Məqsədimiz oxucunu məlumatla yükləmək yox, məlumatı anlamağa kömək etməkdir.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Nə ilə Fərqlənirik</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg text-orange-500">Filtrdən Keçmiş İnformasiya</h3>
                  </div>
                  <p className="text-gray-600">
                    Gündəlik informasiya kirliliyindən uzaq, yalnız əhəmiyyətli faktlar
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg text-orange-500">Şərq Fokuslu Analiz</h3>
                  </div>
                  <p className="text-gray-600">
                    Regionun geosiyasi proseslərini daha geniş kontekstdə izah edirik
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg text-orange-500">Qlobal Baxış</h3>
                  </div>
                  <p className="text-gray-600">
                    Beynəlxalq güclərin təsirlərini və ədalətsizlikləri faktlarla təhlil edirik
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg text-orange-500">Araşdırma Yönümlü Yanaşma</h3>
                  </div>
                  <p className="text-gray-600">
                    Hadisələrin pərdəarxasını göstəririk, sadəcə nəticələri deyil
                  </p>
                </div>
              </div>
            </div>

            {/* Our Goal */}
            <div className="bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-6">Hədəfimiz</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                Oxucuların tənqidi düşüncə qabiliyyətini inkişaf etdirmək, daha aydın dünya mənzərəsi təqdim etmək və həqiqətə əsaslanan ictimai fikir formalaşdırmaqdır.
              </p>
              <p className="text-xl font-bold text-white">
                Bizim üçün əsas prinsip — görünəni deyil, gerçək olanı göstərməkdir.
              </p>
            </div>

            {/* Final Message */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 text-center">
              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                Biz xəbərdən daha artığını təqdim edirik:<br />
                <span className="text-orange-600">hadisələrin mahiyyətini anlamaq üçün kontekst.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}