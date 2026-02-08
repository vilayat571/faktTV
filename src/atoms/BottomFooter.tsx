import { socialMedia } from "../constants/footer";

const BottomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Copyright */}
      <p className="text-gray-400 text-sm">
        © {currentYear}
        <span className="text-orange-500 font-semibold"> FAKT TV</span>. Bütün
        hüquqlar qorunur.
      </p>

      {/* Social Media */}
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-sm xl:block lg:block md:block sm:hidden">
          Bizi izləyin:
        </span>
        <div className="flex gap-3">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
              aria-label={social.name}
            >
              <div className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
