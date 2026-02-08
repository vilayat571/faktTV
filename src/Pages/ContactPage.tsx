import { ArrowRight, Mail, MessageSquare, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Layout from "../layout/Layout";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Bütün xanaları doldurun");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Düzgün email daxil edin");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://agsanews-production.up.railway.app/api/v1/contact", formData);

      if (response.data.status === "OK") {
        toast.success("Mesajınız uğurla göndərildi!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Xəta baş verdi. Yenidən cəhd edin.");
    } finally {
      setLoading(false);
    }
  };

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
                <MessageSquare className="w-10 h-10" />
                <h1 className="text-3xl lg:text-5xl font-bold">Bizimlə Əlaqə</h1>
              </div>
              <p className="text-lg text-white/90 max-w-3xl">
                Rəyləriniz, təklifləriniz və ya suallarınız varsa bizimlə əlaqə saxlayın. Komandamız sizə kömək etməyə hazırdır.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Info Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Əlaqə Məlumatları
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Xəbər təklifləriniz, geri bildirişləriniz və ya ümumi sorğularınız üçün bizimlə əlaqə saxlaya bilərsiniz. Komandamız sizə kömək etməyə hazırdır.
              </p>

              <div className="space-y-6">
                <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-lg p-5 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-wide text-gray-700">
                      Email
                    </h3>
                  </div>
                  <a 
                    href="mailto:cenabmiri545@gmail.com" 
                    className="text-gray-900 font-semibold hover:text-orange-600 transition-colors"
                  >
                    cenabmiri545@gmail.com
                  </a>
                </div>

                <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-lg p-5 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-wide text-gray-700">
                      Xəbər Təklifləri
                    </h3>
                  </div>
                  <a 
                    href="mailto:cenabmiri545@gmail.com" 
                    className="text-gray-900 font-semibold hover:text-orange-600 transition-colors"
                  >
+994 070 412 074
                  </a>
                </div>

                <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-lg p-5 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-wide text-gray-700">
                      Ünvan
                    </h3>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Azərbaycan, Bakı
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="text-sm text-blue-900">
                  💡 <strong>Məsləhət:</strong> Mesajınızda mövzunu qeyd etsəniz, sizə daha tez və dəqiq cavab verə bilərik.
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Mesaj Göndərin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all cursor-text"
                    placeholder="Adınızı daxil edin"
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all cursor-text"
                    placeholder="email@example.com"
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none cursor-text"
                    placeholder="Mesajınızı buraya yazın..."
                    disabled={loading}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-orange-500 to-red-500 rounded-lg text-white py-4 px-6 font-bold uppercase tracking-wide hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span>{loading ? "Göndərilir..." : "Mesajı Göndər"}</span>
                  {!loading && <ArrowRight size={20} />}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                * İşarələnmiş xanalar mütləq doldurulmalıdır
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}