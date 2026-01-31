import { ArrowRight } from "lucide-react";
import Layout from "../Layout";

export function ContactPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-20">
        <div className="border-l-4 border-orange-500 pl-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              We'd love to hear from you. Whether you have a news tip, feedback,
              or a general inquiry, our team is here to help.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-1">
                  Email
                </h3>
                <p className="text-gray-900">contact@thewire.com</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-1">
                  News Tips
                </h3>
                <p className="text-gray-900">tips@thewire.com</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-1">
                  Address
                </h3>
                <p className="text-gray-900">
                  123 News Boulevard
                  <br />
                  Media City, MC 12345
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 px-4 py-2 focus:border-orange-500 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-2 border-gray-300 px-4 py-2 focus:border-orange-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border-2 border-gray-300 px-4 py-2 focus:border-orange-500 outline-none transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
