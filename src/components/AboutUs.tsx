import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="mt-6 mb-6 bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-black text-3xl font-bold">About Us</h1>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto leading-relaxed">
          Discover the epitome of luxury living with our exclusive furniture
          collection. Each piece is meticulously crafted to bring sophistication
          and elegance to your home.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6 max-w-6xl mx-auto px-4">
        {/* Left Side - Text Divs */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Text Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold text-black mb-2">
              Inspired Living
            </h1>
            <p className="text-black">
              Discover furniture that combines modern elegance with everyday
              comfort, crafted to make your home a reflection of your unique
              style.
            </p>
          </div>

          {/* Text Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold text-black mb-2">
              Exceptional Savings
            </h1>
            <p className="text-black">
              By bridging the gap between you and trusted furniture makers, we
              bring you stunning pieces at prices that fit your budget.
            </p>
          </div>

          {/* Text Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold text-black mb-2">Easy Shopping</h1>
            <p className="text-black">
              From quick browsing to fast delivery and easy assembly, we
              simplify every step of finding and enjoying your perfect
              furniture.
            </p>
          </div>

          {/* Text Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold text-black mb-2">
              Sustainable Options
            </h1>
            <p className="text-black">
              Choose from sustainable furniture options crafted with the planet
              in mind—because style should never come at the cost of the
              environment.
            </p>
          </div>
        </div>

        {/* Right Side - Image Divs */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="col-span-1 row-span-1">
            <img
              src="https://s3-alpha-sig.figma.com/img/ad11/da20/4602ad8de35932ce40f24208390c97d2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAmmNVd8A5iSxqk-8mKu6p5VM2smqpu5SopBlOZzm4PZ6kQWL6ekh1icuZn~xLGr7WnDNOj5abTzg~QaejYKZzj9paoLpKucUQAywBmjlhgcALqclOr2jxLUmqw8C9jS1xapht4XVLLDxfZmQNZInR3fLULnll-VAHwS0gZEstrAm3owY3VulbmIS7RCSVjC56aV6sW7mBrL941qm~UagUFV82EIcCNqdxM~-XFHetxF6-baGCdEcDYs7XXf-2eKYoZVlpdmQf-AIU9zopJ3CT-6IfRyI7Tgy3DOikAjHHtVwkgKZZll87JXZnx~NK1XEpQBEOyWG8sPEyGRkisnVw__"
              alt="Placeholder 1"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="col-span-1 row-span-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/f63e/511e/0c1ef834c3ececefcb0b61aa952ac3fd?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d5PYv8PGsZnwNqIj8PkgCZkGylMA0u2M7YbZMAu2OOSNdzlm~psoNof38VKrQkt18BT0s35NThJWgkIge52ap0bRARJRtjngutr09VdP28k-zIW09WU8kZ~v2WX79NB1a~gkLb-PFVkxlSUjinQPAcOY5Qhm~~F45hiuaQHU04JHfaxw1~c9HsfyM1N0Pmwj8CUOox1mS4pSgEodhIWscy8Bwm6K-NGRb1EJ0miAbM9w46lJB1hdbXT7pibLK5taQH68LBAdE0~dLcTTVdf8zS0w7iXB0xTQMSGf3HQnOfLSiRQ7dQiWcj1hanKsnX7G8kD4Jkj1IcZbS7oaTlYS4w__"
              alt="Placeholder 2"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="col-span-1 row-span-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/1854/8e5f/b7e9e10ece3ff536cf9ca12d0cafcf57?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vkcg8YDyRiXozHlSfANRnR546fUBbysrhDpssptIODQxR9PkTL1p78KZrL~poVPdnTh51g~81TcWE672eWYHgEvVJ4umUN3RVtG2Ns-aB4KswFpsF-WgVU~-5wdQ71dQiqIXyd36oR6VQjc3VaMKtEWIJVpocWVShhMUU1ewbKahYOC2eH8c49egTHkNbssjT-GHyH-1aUgwA9M7xnsviu1yOn2ktLlv64tZsD~5wyi8bWwVjTxK-Z9i3gku5dg9Hng3G34Y2ZSsdWy53BzxlLcvQm61k9XYZ4ZyiWTY2izntdGlVbFHA19I1rR-X08SCITohMS4Us5xDXix0o7jUw__"
              alt="Placeholder 3"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="col-span-1 row-span-1">
            <img
              src="https://s3-alpha-sig.figma.com/img/621c/e411/19306f085278fd4a24dd870e7cd00abb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-jNPezd~M-HEYK1Ve3e6fpSzDFdVPfkO1izo2hVzeWAnu-O-fLFaqi-FPbc8ktGkqwQrU5m3wpPHJX1JGyNm0OT0O4ditDXA~mOK3ZVQ1rLMVu-0GPVrgBPSrrYvMMYnREAMWhuBpGAAx0WNHiCsGG6CXmvTPe7FydGnWg0lULCnRlu6YB3BLxXGHMgdFiS30hyhduBN8XpwelyOL9js8dlrhdtrNjDcAtks6GVuOGeEYIaMnCHteLW6YMG4NvtS0PXQFmJ68gXsX-wnK1mUt1EircIXeC2xgcWuIT7nvaPlnDvaLvk~3B-y09sTFhTkMVCzHCooJZUyjsPy6EQeQ__"
              alt="Placeholder 4"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
