import Layout from "../layout/Layout";
import { Shield, Lock, Eye, FileText, Mail, AlertCircle } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <div className="w-full bg-linear-to-b from-gray-50 to-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section with Gradient */}
          <div className="relative bg-linear-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-2xl p-8 lg:p-12 mb-8 shadow-xl overflow-hidden">
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
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10" />
                <h1 className="text-3xl lg:text-5xl font-bold">
                  Məxfilik Siyasəti
                </h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl">
                Fakt TV olaraq istifadəçilərimizin məxfiliyinə hörmət edir və
                şəxsi məlumatların təhlükəsizliyini təmin edirik.
              </p>
              <p className="text-sm text-white/70 mt-4">
                Son yenilənmə: 5 Fevral, 2026
              </p>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            {/* Important Notice */}
            <div className="mb-8 p-5 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
              <p className="text-sm font-medium text-orange-900 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  <strong>Vacib:</strong> Fakt TV heç bir şəxsi məlumat (ad,
                  email, telefon nömrəsi) toplamır və ya saxlamır. Platformamız
                  tamamilə anonim istifadə üçün nəzərdə tutulub.
                </span>
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-100">
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Topladığımız Məlumatlar
                </h2>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  Saytımızdan istifadə edərkən yalnız texniki məlumatlar
                  toplanır:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>
                    <strong>Texniki məlumatlar:</strong> Brauzer növü, cihaz
                    tipi, IP ünvanı (anonim)
                  </li>
                  <li>
                    <strong>İstifadə statistikası:</strong> Hansı xəbərlərə
                    baxdığınız, keçid müddəti
                  </li>
                  <li>
                    <strong>Cookie-lər:</strong> Təcrübəni yaxşılaşdırmaq üçün
                    minimal cookie istifadəsi
                  </li>
                  <li>
                    <strong>Yadda saxlanan xəbərlər:</strong> Yalnız cihazınızın
                    local storage-ində saxlanır
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-100">
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Məlumatların İstifadəsi
                </h2>
              </div>
              <div className="text-gray-700">
                <p className="mb-3">
                  Toplanan məlumatlar yalnız aşağıdakı məqsədlər üçün istifadə
                  olunur:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>
                    Platformanın performansını və istifadə təcrübəsini
                    təkmilləşdirmək
                  </li>
                  <li>
                    Xəbər məzmununun keyfiyyətini artırmaq üçün oxunma
                    statistikası
                  </li>
                  <li>
                    Texniki problemlərin həlli və təhlükəsizliyin təmin edilməsi
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600 italic">
                  Heç bir məlumat üçüncü tərəflərə satılmır və ya paylaşılmır.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-100">
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Cookie-lər və Təhlükəsizlik
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Saytımız minimal sayda cookie istifadə edir. Brauzerinizin
                  parametrlərindən cookie-ləri idarə edə və ya rədd edə
                  bilərsiniz.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Təhlükəsizlik tədbirləri:
                  </h3>
                  <ul className="space-y-1 ml-4 list-disc text-sm">
                    <li>HTTPS şifrələmə protokolu</li>
                    <li>Təhlükəsiz məlumat saxlama</li>
                    <li>Müntəzəm təhlükəsizlik yeniləmələri</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-100">
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  İstifadəçi Hüquqları
                </h2>
              </div>
              <div className="text-gray-700">
                <p className="mb-3">
                  Hər bir istifadəçi aşağıdakı hüquqlara malikdir:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Cookie-ləri istənilən vaxt rədd etmək</li>
                  <li>Local storage-də saxlanılan məlumatları silmək</li>
                  <li>Məxfilik siyasəti ilə bağlı sual vermək</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-100">
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Dəyişikliklər
                </h2>
              </div>
              <div className="text-gray-700">
                <p>
                  Bu məxfilik siyasəti zərurət yarandıqda yenilənə bilər.
                  Əhəmiyyətli dəyişikliklər olarsa, saytda bildiriş
                  yerləşdiriləcək.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-orange-100">
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Əlaqə</h2>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">
                  Məxfilik siyasəti ilə bağlı suallarınız varsa bizimlə əlaqə
                  saxlayın:
                </p>
                <div className="bg-linear-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-600" />
                      <span className="font-medium text-gray-900">Email:</span>
                      <a
                        href="mailto:info@fact-news.info"
                        className="text-orange-600 hover:text-orange-700 font-semibold"
                      >
                        cenabmiri545@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-orange-600" />
                      <span className="font-medium text-gray-900">
                        Website:
                      </span>
                      <a
                        href="https://www.fact-news.info"
                        className="text-orange-600 hover:text-orange-700 font-semibold"
                      >
                        www.fact-news.info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-white rounded-xl shadow-lg px-6 py-4 border border-gray-100">
              <p className="text-sm text-gray-600">
                <Shield className="w-4 h-4 inline mr-2 text-orange-500" />
                Bu səhifə son dəfə <strong>5 Fevral, 2026</strong> tarixində
                yenilənib
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          animation: fadeIn 0.6s ease-out;
        }

        .prose ul {
          list-style-type: disc;
        }

        .prose strong {
          color: #111827;
          font-weight: 700;
        }
      `}</style>
    </Layout>
  );
};

export default Privacy;
