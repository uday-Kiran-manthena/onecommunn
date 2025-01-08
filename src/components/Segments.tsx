import React from "react";

const Segments: React.FC = () => {
  return (
    <div className="m-16">
      {/* Header Section */}
      <div className="bg-[#D3D3D3] h-16 font-bold rounded-xl px-8 flex items-center gap-4">
        <i className="fa-sharp fa-solid fa-shapes"></i>
        <h1>Segments</h1>
      </div>

      {/* Card Section */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="relative bg-cover bg-center h-[400px] rounded-lg flex flex-col justify-between items-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/9221/7a8d/981b04dc3584d8b880931736d4bad565?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjljXkmEGduHklQJIERZieNp5NbQJy8j4VWvLoiae1l-vQZ-LCpz2QHterxxxPbXOg1JVQancRrW0bidhsd4YVlbF52OQcaWrwgywwc3x0affpaD5G3ZTYkmx4QxnSXyXGMXlaW5-8FGNQRjMWhWtqah3q5Kj5PrBneBITwtTWEnVY9EjwDXY6mjaY1ueDjB9nCxD13hXAS9Rpo2riIb9vm2wvdzVga7h5AhQLLU6o-iKazU3iVGpjZVN6wkQ1ow7DEX4wAilpll0abAcKqX4uy0n0RXzvyvltSSZGB3FCcmbtAp-1UQ9L~si6zDy2XyMPDl0y-5KbLPjDo4cUypew__')",
          }}
        >
          <h1 className="text-black text-2xl mt-3 font-extrabold">
            Residential
          </h1>
          <button className="bg-black text-white px-6 py-2 mb-3 rounded-lg">
            View More
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="relative bg-cover bg-center h-[400px] rounded-lg flex flex-col justify-between items-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/f911/e2fd/b243fb7b02db89776bdb5e15f0c50687?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LhS-Fd~MEOQlFsqSwB2RFirencRB3UXfbFyvx7ONHPu-shMfc~nMaJYtgZTG7p5bUBiP1-VREV~JqJUdJwZ6b~i5vPoJvRwsHHQ7XReK2-rp5jKFvmjEMambh88IdbLFYhAp2d1m8TaO~xjoNYkna7hW~foXFey5N6UOLoaaWJLazDBy6tU7HDzyxRmyCnswQzQriCxfTkCbFEMrAXqubDj4ZhgAL1t1QdvEx~yNTD-rNwqluwUYSsMyvSdizX8B3g5eW7aV-6ERRgyeX7irX3Qs0~emZG5LJUoPUi-S8h4w-9jOG6ExO2N8nouty5QxlcgLNi1BWxkZ4VZeUeaZtA__')",
          }}
        >
          <h1 className="text-black text-2xl mt-3 font-extrabold">
            Institutional
          </h1>
          <button className="bg-black text-white px-6 py-2 mb-3 rounded-lg">
            View More
          </button>
        </div>

        {/* Card 3 */}
        <div
          className="relative bg-cover bg-center h-[400px] rounded-lg flex flex-col justify-between items-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/b567/a289/564d0c3dabd217c8fa3313e33cb9e734?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTjxVsb5IZyc8BMnu7dZVvHrzTiOHf1~1COTWT0h0WtdbL3M9mB8tx4jlJMD2gYPuWmrcagUvc9Tt4xtv5H4VyGv~n6uq-8jdVS38AlkzWGymF3NK3jBpgPzLSD8Lw6~T5BKRbXS54fki-amrGWjmrImsgqeSCZWIhP5Ejcqqcrb~SfFyOxXnOF88vZwfrrOi-NwqsTiMb4CTC028VStBN~hYK~4Xo4wuwoy8WRxQx3Wz5PHfiwl98KXG1yqAdGO4R5W1Vi47Ikw88oE31sHHmOS~ESDWevSXs3ry2YfhdaISvM235f-iwxciDosPfsHuC304p4TBBw9cW3f~fJMHQ__')",
          }}
        >
          <h1 className="text-black text-2xl mt-3 font-extrabold">
            Commercial
          </h1>
          <button className="bg-black text-white px-6 py-2 mb-3 rounded-lg">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Segments;
