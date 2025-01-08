import React from "react";

const Viber: React.FC = () => {
  const data = [
    {
      icon: "📦",
      title: "Step 1: Select your model",
      description:
        "Choose a design that resonates with your style and personality.",
    },
    {
      icon: "⚙️",
      title: "Step 2: Customize",
      description:
        "Personalize with materials and finishes to match your preferences.",
    },
    {
      icon: "✅",
      title: "Step 3: Quality Check",
      description: "Our team ensures each piece meets our rigorous standards.",
    },
    {
      icon: "🚚",
      title: "Step 4: Delivery",
      description:
        "Enjoy a seamless delivery experience right to your doorstep.",
    },
  ];
  return (
    <div className="flex flex-col items-center mb-5 mt-7">
      <h1 className="text-black text-3xl text-center font-bold">
        Why Vibrer Stands Out?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 bg-gray-200 p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "#D3D3D3", height: "300px" }} // Increased height
          >
            {/* Icon */}
            <div className="text-6xl text-black">{item.icon}</div>
            {/* Text Content */}
            <div className="text-center">
              <h1 className="text-lg font-bold text-gray-900">{item.title}</h1>
              <p className="text-black">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Viber;
