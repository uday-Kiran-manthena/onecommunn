import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__"
              alt="Company Logo"
              className="w-24 h-24"
            />
          </div>
          <p className="text-sm text-white">
            Your dream space deserves the best execution, and that’s where
            United Buildpro Pvt Ltd excels. Our construction services encompass
            everything from foundational work to structural builds, tailored to
            residential, commercial, and industrial needs. We pride ourselves on
            using high-quality materials and advanced techniques to ensure
            durability and efficiency in every project we undertake.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram text-2xl hover:text-gray-300"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin text-2xl hover:text-gray-300"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Header Links */}
        <div className="flex justify-end ">
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#living" className="hover:underline">
                Living
              </a>
            </li>
            <li>
              <a href="#storage" className="hover:underline">
                Storage
              </a>
            </li>
            <li>
              <a href="#dining" className="hover:underline">
                Dining
              </a>
            </li>
            <li>
              <a href="#bedroom" className="hover:underline">
                Bedroom
              </a>
            </li>
            <li>
              <a href="#mattress" className="hover:underline">
                Mattress
              </a>
            </li>
            <li>
              <a href="#study" className="hover:underline">
                Study
              </a>
            </li>
            <li>
              <a href="#office" className="hover:underline">
                Office
              </a>
            </li>
            <li>
              <a href="#outdoor" className="hover:underline">
                Outdoor
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Miscellaneous Links */}
        <div className="flex justify-center">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#faq" className="hover:text-gray-300">
                Residential
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300">
                Institutional
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-gray-300">
                Commercial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />

      {/* Footer Bottom Section */}
      <div className="mt-10 text-center text-white text-sm">
        &copy; {new Date().getFullYear() - 1} Your Company. All rights reserved.
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3ab9/eeb0/e196ede389387ab9e06d10d71ce9b10e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNTwUY4uSrRu2N7zb5JVUSxrebvHcRD16NWb6iCg~nP9UvpRlYMSof~ZUorH0ehgJFPOFR9wmDxuzdDoq-ez5fgNVVg4XdLzitmu5T~HKn1SS20Ox~ST5gis5Kp60DTVNn8OO8VgeNhOR3X0xIrGn8LXHEwdp~OFMluGXPRJMWsEeoU5PBpG93z45rOKcIaB4Lhk5CJA7Dw6BpLnPJL~VXfAzanIznxxRYq3EP1wi3JXo1i4oeKlBufOjH5IgKmaTu2PpmamU-KzrR91OaddMfoylzO8dibDAWYwRGh7p38g~QQx5H4w~EYAF5lKEmoP76bsyG7w0xMBCmtBRnmHcQ__"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
